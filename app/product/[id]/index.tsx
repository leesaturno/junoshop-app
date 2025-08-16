import React from 'react';
import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ProductDetail } from '@/components/product/ProductDetail';

export default function ProductPage() {
  const params = useLocalSearchParams();
  
  // En un caso real, estos datos vendrían de una API
  const mockData = {
    description: 'Una deliciosa hamburguesa con doble carne, queso derretido, vegetales frescos y nuestra salsa especial.',
    ingredients: [
      'Pan brioche',
      'Doble carne de res',
      'Queso cheddar',
      'Lechuga fresca',
      'Tomate',
      'Cebolla caramelizada',
      'Salsa especial'
    ],
    rating: 4.5,
    reviews: 230
  };

  return (
    <View style={{ flex: 1 }}>
      <ProductDetail
        title={params.title as string}
        imageUrl={params.imageUrl as string}
        price={Number(params.price)}
        description={mockData.description}
        ingredients={mockData.ingredients}
        rating={mockData.rating}
        reviews={mockData.reviews}
      />
    </View>
  );
}