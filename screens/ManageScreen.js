import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from '../styles/HomeStyles'

export default function ManageScreen() {
  const transactionsList = [
    { id: '1', title: 'Groceries', amount: -45.20, category: 'Food' },
    { id: '2', title: 'Salary', amount: 1500, category: 'Income' },
    { id: '3', title: 'Coffee', amount: -3.5, category: 'Food' },
    { id: '4', title: 'Internet Bill', amount: -30, category: 'Bills' },
  ]

  const renderTxnRow = ({ item }) => {
    const expenseFlag = item.amount < 0
    return (
      <View style={styles.transactionRow}>
        <View>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionCategory}>{item.category}</Text>
        </View>
        <Text style={[
          styles.transactionAmount,
          expenseFlag ? styles.expense : styles.income,
        ]}>
          {expenseFlag ? '-' : '+'}${Math.abs(item.amount).toFixed(2)}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>Manage</Text>
        <View style={styles.profile}>
          <Text style={styles.profileInitials}>AS</Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#fff7ed', borderRadius: 12, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#fed7aa' }}>
        <Text style={{ color: '#9a3412', fontWeight: '700' }}>This section is not fully completed yet.</Text>
        <Text style={{ color: '#9a3412', marginTop: 4 }}>We are working on Manage features.</Text>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceValue}>$1,421.30</Text>
        <View style={styles.balanceRow}>
          <Text style={[styles.pill, styles.incomePill]}>+ $2,300 income</Text>
          <Text style={[styles.pill, styles.expensePill]}>- $879 expenses</Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
          <Text style={styles.actionText}>+ Add Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.secondaryAction]} onPress={() => {}}>
          <Text style={[styles.actionText, styles.secondaryActionText]}>+ Add Income</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <FlatList
        data={transactionsList}
        renderItem={renderTxnRow}
        keyExtractor={(row) => row.id}
        contentContainerStyle={styles.transactionsList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}


