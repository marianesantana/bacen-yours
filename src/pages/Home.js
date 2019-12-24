import React from 'react';
import { View, Text } from 'react-native';

import RecentActivityCard from '../components/RecentActivityCard'
import CreditCard from '../components/CreditCard'
import Header from '../components/Header'

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around' }}>
      <Text style={{ marginLeft: 10 }}>Home</Text>
      <CreditCard />

      <RecentActivityCard />
    </View>
  );
}
