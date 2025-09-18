import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionsProvider } from './src/context/TransactionsContext';
import TransactionsScreen from './src/screens/TransactionsScreen';
import AddTransactionModal from './src/screens/AddTransactionModal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TransactionsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Transactions" component={TransactionsScreen} />
          <Stack.Screen name="AddTransaction" component={AddTransactionModal} />
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionsProvider>
  );
}
