import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Category = Database['public']['Tables']['categories']['Row'];

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('api.categories')
        .select('id, name, image, created_at, updated_at')
        .order('name', { ascending: true });

      if (error) {
        throw new Error(`Error al cargar categorías: ${error.message}`);
      }

      if (!data) {
        throw new Error('No se encontraron categorías');
      }

      setCategories(data);
    } catch (err) {
      console.error('Error en fetchCategories:', err);
      setError(err instanceof Error ? err.message : 'Error al cargar las categorías');
    } finally {
      setLoading(false);
    }
  };

  return { categories, loading, error };
};