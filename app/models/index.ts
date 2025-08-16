import { ImageSourcePropType } from 'react-native';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  images: ImageSourcePropType[];
  categoryId: string;
  ratings: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  image: ImageSourcePropType;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id: string;
  street: string;
  number: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  instructions?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DeliveryDriver {
  id: string;
  name: string;
  email: string;
  phone: string;
  vehicleType: 'bicycle' | 'motorcycle' | 'car';
  vehiclePlate?: string;
  currentLocation?: {
    latitude: number;
    longitude: number;
  };
  status: 'available' | 'busy' | 'offline';
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  deliveryStatus: 'waiting_assignment' | 'assigned' | 'picked_up' | 'in_transit' | 'delivered';
  deliveryAddress: Address;
  deliveryDriverId?: string;
  estimatedDeliveryTime?: Date;
  actualDeliveryTime?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  orders: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}