import { Task, TeamMember, Project } from '../types';

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@proflow.com',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    role: 'admin'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah@proflow.com',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    role: 'member'
  },
  {
    id: '3',
    name: 'Marcus Rodriguez',
    email: 'marcus@proflow.com',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    role: 'member'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily@proflow.com',
    avatar: 'https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    role: 'viewer'
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design new landing page',
    description: 'Create a modern, responsive landing page for the upcoming product launch',
    status: 'in-progress',
    priority: 'high',
    assignee: mockTeamMembers[1],
    dueDate: new Date('2024-01-15'),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-10'),
    tags: ['design', 'frontend', 'urgent'],
    subtasks: [
      { id: 's1', title: 'Create wireframes', completed: true },
      { id: 's2', title: 'Design mockups', completed: true },
      { id: 's3', title: 'Implement responsive design', completed: false }
    ]
  },
  {
    id: '2',
    title: 'Set up CI/CD pipeline',
    description: 'Implement automated testing and deployment pipeline',
    status: 'todo',
    priority: 'medium',
    assignee: mockTeamMembers[2],
    dueDate: new Date('2024-01-20'),
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    tags: ['devops', 'automation'],
    subtasks: [
      { id: 's4', title: 'Configure GitHub Actions', completed: false },
      { id: 's5', title: 'Set up testing environment', completed: false }
    ]
  },
  {
    id: '3',
    title: 'User authentication system',
    description: 'Implement secure user registration and login functionality',
    status: 'completed',
    priority: 'high',
    assignee: mockTeamMembers[0],
    dueDate: new Date('2024-01-10'),
    createdAt: new Date('2023-12-20'),
    updatedAt: new Date('2024-01-08'),
    tags: ['backend', 'security', 'auth'],
    subtasks: [
      { id: 's6', title: 'JWT implementation', completed: true },
      { id: 's7', title: 'Password hashing', completed: true },
      { id: 's8', title: 'Email verification', completed: true }
    ]
  },
  {
    id: '4',
    title: 'Mobile app optimization',
    description: 'Optimize the mobile application for better performance',
    status: 'todo',
    priority: 'low',
    assignee: mockTeamMembers[3],
    dueDate: new Date('2024-01-25'),
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08'),
    tags: ['mobile', 'performance'],
    subtasks: []
  },
  {
    id: '5',
    title: 'Database migration',
    description: 'Migrate existing data to new database schema',
    status: 'in-progress',
    priority: 'urgent',
    assignee: mockTeamMembers[2],
    dueDate: new Date('2024-01-12'),
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-11'),
    tags: ['database', 'migration', 'critical'],
    subtasks: [
      { id: 's9', title: 'Backup existing data', completed: true },
      { id: 's10', title: 'Create migration scripts', completed: false },
      { id: 's11', title: 'Test migration process', completed: false }
    ]
  }
];

export const mockProject: Project = {
  id: '1',
  name: 'ProFlow Launch',
  description: 'Main project for launching the ProFlow task management platform',
  color: '#3b82f6',
  members: mockTeamMembers,
  tasks: mockTasks,
  createdAt: new Date('2023-12-01')
};