import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export const Header = () => {
  const router = useRouter();

  const handleProfilePress = () => {
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="menu" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      
      <Text style={styles.logo}>JunoShop</Text>
      
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleProfilePress}>
          <Ionicons name="person-outline" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.cartContainer}>
            <Ionicons name="cart-outline" size={24} color={theme.colors.text} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.background
  },
  menuButton: {
    padding: theme.spacing.xs
  },
  logo: {
    fontSize:theme.typography.body.fontSize,
    color: theme.colors.primary,
    fontWeight: 'bold'
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconButton: {
    padding: theme.spacing.xs,
    marginLeft: theme.spacing.sm
  },
  cartContainer: {
    position: 'relative'
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: theme.colors.text,
    fontSize: 10,
    fontWeight: 'bold'
  }
});