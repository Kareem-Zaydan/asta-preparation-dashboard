export type TrainingTask = {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium';
  completed: boolean;
};

export const initialTasks: TrainingTask[] = [
  { id: 'sword', title: 'Sword control', description: 'Practise precise anti-magic sword movements.', priority: 'High', completed: false },
  { id: 'endurance', title: 'Physical endurance', description: 'Complete a focused strength and stamina session.', priority: 'Medium', completed: false },
  { id: 'team', title: 'Team coordination', description: 'Review a preparation plan with the Black Bulls.', priority: 'High', completed: false },
];

export function toggleTask(tasks: TrainingTask[], id: string): TrainingTask[] {
  return tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
}

export function getProgress(tasks: TrainingTask[]) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, percentage };
}
