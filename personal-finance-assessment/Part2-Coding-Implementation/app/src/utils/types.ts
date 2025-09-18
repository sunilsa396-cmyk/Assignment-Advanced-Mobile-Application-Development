export type Transaction = {
  id: string;
  serverId?: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  date: string;
  note?: string;
  createdAt: string;
  updatedAt: string;
  syncStatus?: 'pending' | 'synced' | 'failed';
};
