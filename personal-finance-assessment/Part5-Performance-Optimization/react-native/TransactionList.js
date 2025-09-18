import React, { useState } from "react";
import { FlatList, View } from "react-native";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions }) => {
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage(prev => prev + 1); // Simulate pagination
  };

  return (
    <FlatList
      data={transactions.slice(0, page * 10)} // Lazy load
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TransactionItem transaction={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
    />
  );
};

export default TransactionList;
