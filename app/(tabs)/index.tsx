import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { useCategories } from '../hooks/useCategories';
import { useProducts } from '../hooks/useProducts';
import { CategoryList } from '../components/landing/CategoryList';
import { ProductCard } from '../components/product/ProductCard';

export default function HomePage() {
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const { products, loading: productsLoading, error: productsError } = useProducts();

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'JunoShop' }} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categorías</Text>
        <CategoryList
          categories={categories}
          loading={categoriesLoading}
          error={categoriesError}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos Destacados</Text>
        {productsLoading ? (
          <Text style={styles.loadingText}>Cargando productos...</Text>
        ) : productsError ? (
          <Text style={styles.errorText}>{productsError}</Text>
        ) : (
          <View style={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loadingText: {
    textAlign: 'center',
    padding: 20,
    color: '#666',
  },
  errorText: {
    textAlign: 'center',
    padding: 20,
    color: 'red',
  },
});