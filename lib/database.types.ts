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
          id: number
          name: string
          description: string
          price: number
          images: string[]
          category_id: number
          ratings: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          description: string
          price: number
          images: string[]
          category_id: number
          ratings?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          description?: string
          price?: number
          images?: string[]
          category_id?: number
          ratings?: number
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: number
          name: string
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          created_at?: string
        }
        Update: {
          id?: number
          name?: string
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: number
          user_id: string
          status: string
          total: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          user_id: string
          status?: string
          total: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          user_id?: string
          status?: string
          total?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}