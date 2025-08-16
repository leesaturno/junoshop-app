import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '@/constants/theme';

interface BannerProps {
  title: string;
  subtitle: string;
  discount: string;
  imageUrl: string;
}

export const Banner = ({ title, subtitle, discount, imageUrl }: BannerProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.background} resizeMode="cover">
        <LinearGradient
          colors={['rgba(255, 107, 107, 0.9)', 'rgba(255, 160, 122, 0.7)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.overlay}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.discountContainer}>
            <Text style={styles.discount}>{discount}</Text>
            <Text style={styles.discountLabel}>DE DESCUENTO</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    marginHorizontal: theme.spacing.md,
    marginVertical: theme.spacing.md
  },
  background: {
    flex: 1,
    justifyContent: 'center'
  },
  overlay: {
    flex: 1,
    padding: theme.spacing.lg
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 16,
    marginBottom: theme.spacing.md
  },
  discountContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    alignSelf: 'flex-start'
  },
  discount: {
    color: theme.colors.text,
    fontSize: 32,
    fontWeight: 'bold'
  },
  discountLabel: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: '500'
  }
});