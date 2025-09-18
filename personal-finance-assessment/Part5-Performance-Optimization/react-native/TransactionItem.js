import React from "react";
import { Text, View } from "react-native";

const TransactionItem = React.memo(({ transaction }) => {
  console.log("Rendered:", transaction.id);
  return (
    <View style={{ padding: 8, borderBottomWidth: 1 }}>
      <Text>{transaction.category}</Text>
      <Text>{transaction.amount}</Text>
    </View>
  );
});

export default TransactionItem;
