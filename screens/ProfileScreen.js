import React from 'react'
import { View, Text } from 'react-native'

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>Profile</Text>
      <Text style={{ color: '#6b7280', marginTop: 8 }}>User settings coming soon</Text>
    </View>
  )
}


