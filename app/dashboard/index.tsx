import React from 'react'
import { useUserContext } from '@/context/UserContext'
import { Heading, VStack, Text } from '@gluestack-ui/themed';

const Dashboard = () => {
  const { user } = useUserContext();

  return (
    <VStack space='sm'>
      <Heading>Welcome {user.name} 👋</Heading>
      <Text>Email: {user.email}</Text>
      <Text>Your gender is: {user.gender}</Text>
      <Text>Term accepted?: {user.accepted ? "yes" : "no"}</Text>
      <Text>List of childrens: {JSON.stringify(user.children)}</Text>
    </VStack>
  )
}

export default Dashboard