import React from 'react';
import { View, Text } from 'react-native';
import { Transaction } from '../utils/types';

export default function TransactionItem({ tx }: { tx: Transaction }) {
  return (
    <View style={{ padding: 12, borderBottomWidth: 1, borderColor: '#eee' }}>
      <Text>{tx.category} — {tx.type}</Text>
      <Text>₹{tx.amount}</Text>
      <Text style={{ color: '#666' }}>{new Date(tx.date).toLocaleString()}</Text>
    </View>
  );
}
