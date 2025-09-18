import React, { createContext, useReducer, useContext } from 'react';
import { transactionsReducer, initialState, State, Action } from './transactionsReducer';

type TCtx = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const TransactionsContext = createContext<TCtx | undefined>(undefined);

export const TransactionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState);
  return <TransactionsContext.Provider value={{ state, dispatch }}>{children}</TransactionsContext.Provider>;
};

export const useTransactions = (): TCtx => {
  const ctx = useContext(TransactionsContext);
  if (!ctx) throw new Error('useTransactions must be used within TransactionsProvider');
  return ctx;
};
