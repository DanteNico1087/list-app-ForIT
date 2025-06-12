
/** Coincide con la interfaz Task del backend */
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string; 
}
