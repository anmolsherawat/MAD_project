import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import ManageScreen from './screens/ManageScreen'
import ProfileScreen from './screens/ProfileScreen'
import tabStyles from './styles/TabStyles'

export default function App() {
  const [tab, setTab] = React.useState('home')

  const renderActiveScreen = () => {
    if (tab === 'home') return <HomeScreen />
    if (tab === 'manage') return <ManageScreen />
    return <ProfileScreen />
  }

  const isActive = (key) => tab === key

  return (
    <View style={tabStyles.root}>
      <StatusBar style="dark" />
      <View style={tabStyles.spacer}>{renderActiveScreen()}</View>
      <View style={tabStyles.tabBar}>
        <TouchableOpacity accessibilityRole="button" onPress={() => setTab('home')} style={tabStyles.tabItem}>
          <Text style={tabStyles.tabIcon}>🏠</Text>
          <Text style={[tabStyles.tabLabel, isActive('home') && tabStyles.tabLabelActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole="button" onPress={() => setTab('manage')} style={tabStyles.tabItem}>
          <Text style={tabStyles.tabIcon}>🧾</Text>
          <Text style={[tabStyles.tabLabel, isActive('manage') && tabStyles.tabLabelActive]}>Manage</Text>
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole="button" onPress={() => setTab('profile')} style={tabStyles.tabItem}>
          <Text style={tabStyles.tabIcon}>👤</Text>
          <Text style={[tabStyles.tabLabel, isActive('profile') && tabStyles.tabLabelActive]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
