import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, Dimensions } from 'react-native';
import { useTransactions } from '../context/TransactionsContext';
import { api } from '../services/api';
import TransactionItem from '../components/TransactionItem';
import { PieChart } from 'react-native-chart-kit';

const PAGE_SIZE = 20;
const screenWidth = Dimensions.get('window').width;

export default function TransactionsScreen({ navigation }: any) {
  const { state, dispatch } = useTransactions();

  const loadPage = useCallback(async (page: number) => {
    dispatch({ type: 'LOAD_START' });
    const txs = await api.fetchTransactions(page, PAGE_SIZE);
    dispatch({ type: 'LOAD_SUCCESS', payload: { txs, page } });
  }, [dispatch]);

  useEffect(() => {
    loadPage(1);
  }, [loadPage]);

  const loadMore = () => {
    if (!state.hasMore || state.loading) return;
    loadPage(state.page + 1);
  };

  const renderFooter = () => {
    if (!state.loading) return null;
    return <ActivityIndicator style={{ margin: 12 }} />;
  };

  const categoryTotals = state.transactions.reduce((acc: any, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  const pieData = Object.entries(categoryTotals).map(([key, value]) => ({
    name: key,
    population: Number(value),
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  }));

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
      {pieData.length > 0 && (
        <PieChart
          data={pieData}
          width={screenWidth - 24}
          height={150}
          chartConfig={{ backgroundGradientFrom: '#fff', backgroundGradientTo: '#fff', color: () => `rgba(0,0,0,1)` }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      )}

      <FlatList
        data={state.transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem tx={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}
