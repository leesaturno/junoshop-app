export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          ingredients: string[]
          images: string[]
          category_id: string
          ratings: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          ingredients: string[]
          images: string[]
          category_id: string
          ratings?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          ingredients?: string[]
          images?: string[]
          category_id?: string
          ratings?: number
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          image: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          image: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          image?: string
          created_at?: string
          updated_at?: string
        }
      }
      addresses: {
        Row: {
          id: string
          street: string
          number: string
          apartment: string | null
          city: string
          state: string
          zip_code: string
          latitude: number
          longitude: number
          instructions: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          street: string
          number: string
          apartment?: string | null
          city: string
          state: string
          zip_code: string
          latitude: number
          longitude: number
          instructions?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          street?: string
          number?: string
          apartment?: string | null
          city?: string
          state?: string
          zip_code?: string
          latitude?: number
          longitude?: number
          instructions?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      delivery_drivers: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          vehicle_type: 'bicycle' | 'motorcycle' | 'car'
          vehicle_plate: string | null
          current_latitude: number | null
          current_longitude: number | null
          status: 'available' | 'busy' | 'offline'
          rating: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          vehicle_type: 'bicycle' | 'motorcycle' | 'car'
          vehicle_plate?: string | null
          current_latitude?: number | null
          current_longitude?: number | null
          status?: 'available' | 'busy' | 'offline'
          rating?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          vehicle_type?: 'bicycle' | 'motorcycle' | 'car'
          vehicle_plate?: string | null
          current_latitude?: number | null
          current_longitude?: number | null
          status?: 'available' | 'busy' | 'offline'
          rating?: number
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          products: Json
          total: number
          status: 'pending' | 'processing' | 'completed' | 'cancelled'
          delivery_status: 'waiting_assignment' | 'assigned' | 'picked_up' | 'in_transit' | 'delivered'
          delivery_address_id: string
          delivery_driver_id: string | null
          estimated_delivery_time: string | null
          actual_delivery_time: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          products: Json
          total: number
          status?: 'pending' | 'processing' | 'completed' | 'cancelled'
          delivery_status?: 'waiting_assignment' | 'assigned' | 'picked_up' | 'in_transit' | 'delivered'
          delivery_address_id: string
          delivery_driver_id?: string | null
          estimated_delivery_time?: string | null
          actual_delivery_time?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          products?: Json
          total?: number
          status?: 'pending' | 'processing' | 'completed' | 'cancelled'
          delivery_status?: 'waiting_assignment' | 'assigned' | 'picked_up' | 'in_transit' | 'delivered'
          delivery_address_id?: string
          delivery_driver_id?: string | null
          estimated_delivery_time?: string | null
          actual_delivery_time?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          user_id: string
          product_id: string
          rating: number
          comment: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          rating: number
          comment: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          rating?: number
          comment?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}