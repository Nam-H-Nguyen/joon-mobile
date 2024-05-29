import { View, Text } from 'react-native'
import React from 'react'
import { useUserContext } from '@/context/UserContext'
import { Heading } from '@gluestack-ui/themed';

const Dashboard = () => {
  const { user } = useUserContext();

  return (
    <View>
      <Heading>Welcome {user.name} 👋</Heading>
      <Text>Email: {user.email}</Text>
      <Text>Term accepted?: {user.accepted ? "yes" : "no"}</Text>
      <Text>List of childrens: {JSON.stringify(user.children)}</Text>
    </View>
  )
}

export default Dashboard