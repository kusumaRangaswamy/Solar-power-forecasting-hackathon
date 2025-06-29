import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import KanbanBoard from './components/KanbanBoard';
import TaskModal from './components/TaskModal';
import { mockTasks, mockTeamMembers } from './data/mockData';
import { Task } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', mockTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  const handleCreateTask = () => {
    setSelectedTask(null);
    setIsCreatingTask(true);
    setIsTaskModalOpen(true);
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsCreatingTask(false);
    setIsTaskModalOpen(true);
  };

  const handleTaskSave = (taskData: Partial<Task>) => {
    if (selectedTask) {
      // Update existing task
      setTasks(tasks.map(task => 
        task.id === selectedTask.id 
          ? { ...task, ...taskData }
          : task
      ));
    } else {
      // Create new task
      const newTask: Task = {
        ...taskData,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: taskData.tags || [],
      } as Task;
      setTasks([...tasks, newTask]);
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard tasks={tasks} teamMembers={mockTeamMembers} />;
      case 'tasks':
        return (
          <KanbanBoard 
            tasks={tasks} 
            onTaskClick={handleTaskClick}
            onCreateTask={handleCreateTask}
          />
        );
      case 'calendar':
        return (
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calendar View</h2>
            <p className="text-gray-600">Calendar functionality coming soon...</p>
          </div>
        );
      case 'team':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTeamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-gray-600">{member.email}</p>
                      <span className="inline-block px-2 py-1 text-xs bg-primary-100 text-primary-800 rounded-full capitalize mt-2">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h2>
            <p className="text-gray-600">Advanced analytics and reporting coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">Settings panel coming soon...</p>
          </div>
        );
      default:
        return <Dashboard tasks={tasks} teamMembers={mockTeamMembers} />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex h-screen bg-gray-50">
        <Sidebar 
          activeView={activeView} 
          onViewChange={setActiveView} 
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header 
            onCreateTask={handleCreateTask}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
          />
          
          <main className="flex-1 overflow-auto">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </main>
        </div>
      </div>

      <TaskModal
        task={selectedTask}
        isOpen={isTaskModalOpen}
        onClose={() => {
          setIsTaskModalOpen(false);
          setSelectedTask(null);
          setIsCreatingTask(false);
        }}
        onSave={handleTaskSave}
        teamMembers={mockTeamMembers}
        isEditing={isCreatingTask}
      />
    </div>
  );
}

export default App;