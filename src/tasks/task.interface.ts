export interface ITask {
  id: number;
  description: string;
  status: number;
  updatedAt?: Date;
  createdAt: Date;
}
