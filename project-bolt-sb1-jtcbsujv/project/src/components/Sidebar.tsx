import React from 'react';
import { 
  Home, 
  Calendar, 
  Users, 
  Settings, 
  BarChart3, 
  Plus,
  ChevronDown,
  Folder,
  Target
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'tasks', label: 'My Tasks', icon: Target },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <motion.div 
      className="w-64 bg-white border-r border-gray-200 h-full flex flex-col"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ProFlow</h1>
            <p className="text-xs text-gray-500">Project Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                isActive
                  ? 'bg-primary-50 text-primary-600 border border-primary-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* Projects Section */}
      <div className="px-4 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <ChevronDown className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-900">Projects</span>
          </div>
          <motion.button
            className="p-1 hover:bg-gray-100 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus className="w-4 h-4 text-gray-500" />
          </motion.button>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
            <Folder className="w-4 h-4" />
            <span>ProFlow Launch</span>
          </div>
          <div className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <Folder className="w-4 h-4" />
            <span>Website Redesign</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;