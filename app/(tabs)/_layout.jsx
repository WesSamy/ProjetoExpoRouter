import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        nome= "Home"
        options= {{
          tabBarIcon: ({ color, size}) => <FontAwesome name="home" color=
          {'#FF0000'} size={size} />,
          tabBarStyle: { backgroundColor: 'yellow'},
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="curiosidades"
        options={{
          tabBarIcon: ({color, size}) => <FontAwesome name="question" color=
          {'green'} size={size} />,
          tabBarstyle: {backgroundColor: 'grey'},
          headerShown: false,        
        }}
        />
        <Tabs.Screen 
          name="lendas"
          options={{
            tabBarIcon: ({color, size}) => <FontAwesome nome="search" color=
            {'black'} size={size} />,
            tabBarStyle: {backgroundColor: 'aquamarine'},
            headerShown: false,
          }}
        />
    </Tabs>
  );
}