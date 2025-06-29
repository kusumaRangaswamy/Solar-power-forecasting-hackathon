export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee?: TeamMember;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  subtasks?: Subtask[];
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'member' | 'viewer';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  members: TeamMember[];
  tasks: Task[];
  createdAt: Date;
}

export type ViewMode = 'kanban' | 'list' | 'calendar';