import { transactionsReducer, initialState } from '../app/src/context/transactionsReducer';
import { Transaction } from '../app/src/utils/types';

test('adds local transaction', () => {
  const tx: Transaction = {
    id: 'local-1',
    amount: 100,
    category: 'Food',
    type: 'expense',
    date: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    syncStatus: 'pending',
  };
  const next = transactionsReducer(initialState, { type: 'ADD_LOCAL', payload: tx });
  expect(next.transactions[0]).toEqual(tx);
});
