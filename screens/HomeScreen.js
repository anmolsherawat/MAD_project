import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/HomeStyles'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>Home</Text>
        <View style={styles.profile}>
          <Text style={styles.profileInitials}>AS</Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#ffffff', borderRadius: 16, padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: '700', color: '#111827' }}>Welcome back 👋</Text>
        <Text style={{ marginTop: 6, color: '#6b7280' }}>Your finances at a glance.</Text>
      </View>
    </View>
  )
}


