import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { Categories } from '@/lib/supabase';
import { theme } from '@/constants/theme';

interface CategoryListProps {
  categories: Categories[];
  loading: boolean;
  error: string | null;
}

export const CategoryList: React.FC<CategoryListProps> = ({ categories, loading, error }) => {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <Link key={category.id} href={`/(tabs)/category/${category.id}`} asChild>
          <Pressable style={styles.categoryCard}>
            <Image
              source={{ uri: category.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.overlay}>
              <Text style={styles.name}>{category.name}</Text>
            </View>
          </Pressable>
        </Link>
      ))}
    </View>
  );
};

export default CategoryList;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
  categoryCard: {
    width: '47%',
    height: 120,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.background,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    padding: theme.spacing.md,
  },
  name: {
    color: theme.colors.text,
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  errorContainer: {
    padding: theme.spacing.lg,
    alignItems: 'center',
  },
  errorText: {
    color: theme.colors.error,
    textAlign: 'center',
  },
});