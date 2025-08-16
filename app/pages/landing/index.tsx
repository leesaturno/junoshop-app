import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Header } from '@/components/landing/Header';
import { Banner } from '@/components/landing/banner';
import { ProductCard } from '@/components/landing/productcard';
import { CategoryList } from '@/components/landing/CategoryList';
import { useCategories } from '@/hooks/useCategories';
import { theme } from '@/constants/theme';

const newProducts = [

  { id: '1', title: 'Gold Burguer Especial', price: 20, imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd' },
  { id: '2', title: 'Gold Burguer BBQ', price: 20, imageUrl: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828' },
  { id: '3', title: 'Gold Burguer Clásica', price: 20, imageUrl: 'https://images.unsplash.com/photo-1550317138-10000687a72b' },
  { id: '4', title: 'Gold Burguer Doble', price: 20, imageUrl: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9' },
  { id: '5', title: 'Gold Burguer Premium', price: 20, imageUrl: 'https://images.unsplash.com/photo-1551782450-17144efb9c50' }
];

export default function LandingPage() {
  const { categories, loading, error } = useCategories();

  const handleProductPress = (productId: string) => {
    console.log('Product pressed:', productId);
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Banner
        title="Pizza 4 Quesos Familiar"
        subtitle="solo este fin de semana"
        discount="50%"
        imageUrl="https://images.unsplash.com/photo-1513104890138-7c749659a591"
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CATEGORÍAS</Text>
        <CategoryList categories={categories} loading={loading} error={error} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>LO MÁS NUEVO</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productList}>
          {newProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.price}
              onPress={() => handleProductPress(product.id)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>LO MÁS VENDIDO</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productList}>
          {newProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.price}
              onPress={() => handleProductPress(product.id)}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  section: {
    marginBottom: theme.spacing.lg
  },
  sectionTitle: {
    fontSize:theme.typography.h2.fontSize,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.md
  },
  categoryList: {
    paddingHorizontal: theme.spacing.md
  },
  productList: {
    paddingHorizontal: theme.spacing.md
  }
});