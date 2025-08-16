import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';

interface ProductCardProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  onPress: () => void;
}

export const ProductCard = ({ id, title, imageUrl, price }: ProductCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/product/[id]',
      params: {
        id: id,
        title: title,
        imageUrl: imageUrl,
        price: price.toString()
      }
    });
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    marginHorizontal: theme.spacing.sm,
    marginVertical: theme.spacing.sm
  },
  imageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: theme.colors.background
  },
  image: {
    width: '100%',
    height: '100%'
  },
  content: {
    padding: theme.spacing.sm
  },
  title: {
    color: theme.colors.text,
    marginBottom: theme.spacing.xs
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 18,
    color: theme.colors.primary
  },
  addButton: {
    width: 24,
    height: 24,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: 'bold'
  }
});