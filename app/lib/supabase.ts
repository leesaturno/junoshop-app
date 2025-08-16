import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Tipos de tablas basados en nuestros modelos
export type Tables = Database['public']['Tables'];
export type Products = Tables['products']['Row'];
export type Categories = Tables['categories']['Row'];
export type Orders = Tables['orders']['Row'];
export type Users = Tables['users']['Row'];
export type Reviews = Tables['reviews']['Row'];
export type DeliveryDrivers = Tables['delivery_drivers']['Row'];
export type Addresses = Tables['addresses']['Row'];