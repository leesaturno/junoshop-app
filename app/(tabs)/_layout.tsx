import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({ light: '#fff', dark: '#000' }, 'background');

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor },
        tabBarActiveTintColor: colorScheme === 'dark' ? '#fff' : '#000',
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#666' : '#999',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="../pages/landing"
        options={{
          title: 'Landing',
          tabBarIcon: ({ color }) => <TabBarIcon name="information-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}

import { Ionicons } from '@expo/vector-icons';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}