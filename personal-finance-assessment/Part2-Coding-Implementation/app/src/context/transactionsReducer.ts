import { Transaction } from '../utils/types';

export type State = {
  transactions: Transaction[];
  page: number;
  loading: boolean;
  hasMore: boolean;
};

export type Action =
  | { type: 'LOAD_START' }
  | { type: 'LOAD_SUCCESS'; payload: { txs: Transaction[]; page: number } }
  | { type: 'ADD_LOCAL'; payload: Transaction }
  | { type: 'UPDATE_Tx'; payload: Transaction };

export const initialState: State = {
  transactions: [],
  page: 1,
  loading: false,
  hasMore: true,
};

export function transactionsReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOAD_START':
      return { ...state, loading: true };
    case 'LOAD_SUCCESS': {
      const combined = state.page === action.payload.page
        ? [...state.transactions, ...action.payload.txs]
        : action.payload.txs;
      return {
        ...state,
        transactions: combined,
        loading: false,
        page: action.payload.page,
        hasMore: action.payload.txs.length > 0,
      };
    }
    case 'ADD_LOCAL':
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case 'UPDATE_Tx':
      return {
        ...state,
        transactions: state.transactions.map((t) => (t.id === action.payload.id ? action.payload : t)),
      };
    default:
      return state;
  }
}
