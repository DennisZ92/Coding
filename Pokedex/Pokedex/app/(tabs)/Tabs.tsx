// filepath: /c:/Users/denni/OneDrive/Dokumente/Programmierung/Pokedex/Pokedex/app/(tabs)/Tabs.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Pokemon Detail' }} />
    </Stack.Navigator>
  );
};

export default Tabs;