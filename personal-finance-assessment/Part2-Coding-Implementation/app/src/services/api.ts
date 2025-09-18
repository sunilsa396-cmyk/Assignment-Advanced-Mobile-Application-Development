import { Transaction } from '../utils/types';

let serverStore: Transaction[] = [];
let seq = 1;

export const api = {
  fetchTransactions: async (page = 1, limit = 20): Promise<Transaction[]> => {
    await new Promise((res) => setTimeout(res, 400));
    const start = (page - 1) * limit;
    const result = serverStore.slice().reverse().slice(start, start + limit);
    return result;
  },

  createTransaction: async (tx: Transaction): Promise<{ serverId: string; updatedAt: string }> => {
    await new Promise((res) => setTimeout(res, 400));
    const serverId = `srv-${seq++}`;
    const updatedAt = new Date().toISOString();
    serverStore.push({ ...tx, serverId, updatedAt });
    return { serverId, updatedAt };
  },
};
