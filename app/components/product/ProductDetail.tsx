import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';

interface ProductDetailProps {
  title: string;
  imageUrl: string;
  price: number;
  description: string;
  ingredients: string[];
  rating: number;
  reviews: number;
}

export const ProductDetail = ({
  title,
  imageUrl,
  price,
  description,
  ingredients,
  rating,
  reviews
}: ProductDetailProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.priceRatingContainer}>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★ {rating}</Text>
            <Text style={styles.reviews}>({reviews} Reviews)</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.description}>{description}</Text>

        <Text style={styles.sectionTitle}>Ingredientes</Text>
        {ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>• {ingredient}</Text>
        ))}

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>AÑADIR AL CARRITO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: theme.colors.surface
  },
  image: {
    width: '100%',
    height: '100%'
  },
  content: {
    padding: theme.spacing.lg
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md
  },
  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg
  },
  price: {
    fontSize: 28,
    color: theme.colors.primary,
    fontWeight: 'bold'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    color: theme.colors.primary,
    fontSize: 16,
    marginRight: theme.spacing.xs
  },
  reviews: {
    color: theme.colors.textSecondary,
    fontSize: 14
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.lg
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    lineHeight: 24
  },
  ingredient: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    marginBottom: theme.spacing.xs
  },
  addToCartButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginTop: theme.spacing.xl
  },
  addToCartText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold'
  }
});