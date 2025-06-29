import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Task } from '../types';
import TaskCard from './TaskCard';

interface KanbanBoardProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onCreateTask: () => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks, onTaskClick, onCreateTask }) => {
  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-gray-50 border-gray-200' },
    { id: 'in-progress', title: 'In Progress', color: 'bg-blue-50 border-blue-200' },
    { id: 'completed', title: 'Completed', color: 'bg-green-50 border-green-200' },
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="h-full overflow-x-auto">
      <div className="flex space-x-6 h-full min-w-max p-6">
        {columns.map((column) => {
          const columnTasks = getTasksByStatus(column.id);
          
          return (
            <motion.div
              key={column.id}
              className={`flex-shrink-0 w-80 ${column.color} rounded-lg border-2 border-dashed p-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-900">{column.title}</h3>
                  <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {columnTasks.length}
                  </span>
                </div>
                <motion.button
                  onClick={onCreateTask}
                  className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus className="w-4 h-4 text-gray-500" />
                </motion.button>
              </div>

              {/* Tasks */}
              <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
                {columnTasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TaskCard
                      task={task}
                      onTaskClick={onTaskClick}
                    />
                  </motion.div>
                ))}
                
                {columnTasks.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Plus className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-sm">No tasks yet</p>
                    <p className="text-xs">Drop tasks here or click + to add</p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;