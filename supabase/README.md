# Configuración de Supabase para JunoShop

## Requisitos Previos

1. Crear una cuenta en [Supabase](https://supabase.com)
2. Crear un nuevo proyecto en Supabase
3. Instalar Supabase CLI

## Configuración del Proyecto

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
EXPO_PUBLIC_SUPABASE_URL=tu_url_de_supabase
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

### 2. Instalación de Dependencias

```bash
npm install @supabase/supabase-js
```

### 3. Migración de la Base de Datos

1. Inicializa Supabase en tu proyecto:
```bash
supabase init
```

2. Vincula tu proyecto:
```bash
supabase link --project-ref tu-referencia-de-proyecto
```

3. Aplica las migraciones:
```bash
supabase db push
```

## Estructura de la Base de Datos

El proyecto incluye las siguientes tablas:

- `categories`: Categorías de productos
- `products`: Productos disponibles
- `addresses`: Direcciones de entrega
- `delivery_drivers`: Conductores de entrega
- `orders`: Pedidos de usuarios
- `reviews`: Reseñas de productos

## Políticas de Seguridad (RLS)

Se han implementado las siguientes políticas:

- Productos y categorías son visibles para todos
- Direcciones son visibles solo para el propietario
- Los conductores pueden actualizar su ubicación y estado
- Pedidos son visibles solo para el propietario
- Reseñas son visibles para todos pero solo pueden ser creadas por usuarios autenticados

## Uso en el Código

```typescript
import { supabase } from '@/lib/supabase';

// Ejemplo de consulta
const { data, error } = await supabase
  .from('products')
  .select('*')
  .order('created_at', { ascending: false });
```

## Tipos TypeScript

Los tipos están definidos en `app/lib/database.types.ts` y son generados automáticamente basados en el esquema de la base de datos.

## Mantenimiento

### Actualizar Tipos

Después de modificar el esquema de la base de datos:

```bash
supabase gen types typescript --linked > app/lib/database.types.ts
```

### Crear Nuevas Migraciones

```bash
supabase migration new nombre_de_la_migracion
```