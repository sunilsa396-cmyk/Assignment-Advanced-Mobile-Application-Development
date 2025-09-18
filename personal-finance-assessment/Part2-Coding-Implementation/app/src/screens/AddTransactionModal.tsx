import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTransactions } from '../context/TransactionsContext';
import { Transaction } from '../utils/types';
import { api } from '../services/api';
import uuid from 'react-native-uuid';

const schema = Yup.object().shape({
  amount: Yup.number().required().positive('Amount must be > 0'),
  category: Yup.string().required(),
  type: Yup.string().oneOf(['income', 'expense']).required(),
});

export default function AddTransactionModal({ navigation }: any) {
  const { dispatch } = useTransactions();

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Formik
        initialValues={{ amount: '', category: 'Food', note: '', type: 'expense' }}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          const tx: Transaction = {
            id: String(uuid.v4()),
            amount: Number(values.amount),
            category: values.category,
            type: values.type as 'income' | 'expense',
            date: new Date().toISOString(),
            note: values.note,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            syncStatus: 'pending',
          };
          dispatch({ type: 'ADD_LOCAL', payload: tx });

          try {
            const res = await api.createTransaction(tx);
            dispatch({
              type: 'UPDATE_Tx',
              payload: { ...tx, serverId: res.serverId, syncStatus: 'synced', updatedAt: res.updatedAt },
            });
          } catch (e) {
            dispatch({ type: 'UPDATE_Tx', payload: { ...tx, syncStatus: 'failed' } });
          }

          resetForm();
          navigation.goBack();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <Text>Amount</Text>
            <TextInput keyboardType="numeric" onChangeText={handleChange('amount')} value={String(values.amount)} />
            {errors.amount && <Text>{String(errors.amount)}</Text>}

            <Text>Category</Text>
            <TextInput onChangeText={handleChange('category')} value={values.category} />

            <Text>Note</Text>
            <TextInput onChangeText={handleChange('note')} value={values.note} />

            <Button title="Add" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
}
