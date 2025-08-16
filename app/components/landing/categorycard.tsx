import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  onPress: () => void;
}

export const CategoryCard = ({ title, imageUrl, onPress }: CategoryCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    alignItems: 'center',
    marginHorizontal: theme.spacing.sm
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.surface,
    overflow: 'hidden',
    marginBottom: theme.spacing.sm
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    ...theme.typography.caption,
    color: theme.colors.text,
    textAlign: 'center'
  }
});