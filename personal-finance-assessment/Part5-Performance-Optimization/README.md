# Part 5 – Performance Optimization

## 1. Profile Memory Usage
- **React Native**: Use Flipper + React DevTools to detect memory leaks.
- **Android (Kotlin)**: Use Android Studio Profiler → check allocations & GC.


## 2. Lazy Loading
- Transactions are loaded in batches (pagination).
- Example in Kotlin (`LazyLoadingTransactions.kt`).
- Example in React Native (`TransactionList.js` with `onEndReached`).

## 3. FlatList Optimization
- Use `keyExtractor` with stable keys.
- Set `initialNumToRender` for faster first paint.
- Enable `onEndReachedThreshold` for pagination.
- Memoize items with `React.memo`.

## 4. Reduce Re-renders
- Use `React.memo` for pure components (`TransactionItem.js`).
- Use `useCallback` for event handlers.
- Use `React.memo` for expensive charts (`OptimizedChart.js`).

