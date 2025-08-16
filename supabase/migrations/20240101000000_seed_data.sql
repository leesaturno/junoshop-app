-- Seed data for roles
INSERT INTO roles (id, name) VALUES
  ('11111111-1111-1111-1111-111111111111', 'admin'),
  ('22222222-2222-2222-2222-222222222222', 'customer'),
  ('33333333-3333-3333-3333-333333333333', 'driver');

-- Seed data for users
INSERT INTO users (id, email, password_hash, full_name, phone, role_id, status) VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'admin@junoshop.com', '$2a$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'Admin User', '+1234567890', '11111111-1111-1111-1111-111111111111', 'active'),
  ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'customer@example.com', '$2a$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'John Doe', '+1234567891', '22222222-2222-2222-2222-222222222222', 'active'),
  ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'driver@example.com', '$2a$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'Driver One', '+1234567892', '33333333-3333-3333-3333-333333333333', 'active');

-- Seed data for categories
INSERT INTO categories (id, name, image) VALUES
  ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'Pizzas', 'https://example.com/images/pizza.jpg'),
  ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'Hamburguesas', 'https://example.com/images/burger.jpg'),
  ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'Bebidas', 'https://example.com/images/drinks.jpg');

-- Seed data for products
INSERT INTO products (id, name, description, price, ingredients, images, category_id, ratings) VALUES
  ('11111111-2222-3333-4444-555555555555', 'Pizza Margherita', 'Clásica pizza italiana', 12.99, ARRAY['Masa', 'Salsa de tomate', 'Mozzarella', 'Albahaca'], ARRAY['https://example.com/images/margherita1.jpg', 'https://example.com/images/margherita2.jpg'], 'dddddddd-dddd-dddd-dddd-dddddddddddd', 4.5),
  ('22222222-3333-4444-5555-666666666666', 'Hamburguesa Clásica', 'Hamburguesa con queso', 9.99, ARRAY['Pan', 'Carne', 'Queso', 'Lechuga', 'Tomate'], ARRAY['https://example.com/images/burger1.jpg'], 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 4.2),
  ('33333333-4444-5555-6666-777777777777', 'Refresco Cola', 'Bebida refrescante', 2.99, ARRAY['Agua carbonatada', 'Azúcar', 'Saborizantes'], ARRAY['https://example.com/images/cola.jpg'], 'ffffffff-ffff-ffff-ffff-ffffffffffff', 4.0);

-- Seed data for addresses
INSERT INTO addresses (id, user_id, street, number, city, state, zip_code, latitude, longitude, instructions) VALUES
  ('44444444-5555-6666-7777-888888888888', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Calle Principal', '123', 'Ciudad', 'Estado', '12345', 40.7128, -74.0060, 'Edificio azul'),
  ('55555555-6666-7777-8888-999999999999', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Avenida Central', '456', 'Ciudad', 'Estado', '12346', 40.7129, -74.0061, 'Casa blanca');

-- Seed data for delivery_drivers
INSERT INTO delivery_drivers (id, user_id, name, email, phone, vehicle_type, vehicle_plate, current_latitude, current_longitude, status, rating) VALUES
  ('66666666-7777-8888-9999-aaaaaaaaaaaa', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'Driver One', 'driver@example.com', '+1234567892', 'motorcycle', 'ABC123', 40.7128, -74.0060, 'available', 4.8);

-- Seed data for orders
INSERT INTO orders (id, user_id, products, total, status, delivery_status, delivery_address_id, delivery_driver_id) VALUES
  ('77777777-8888-9999-aaaa-bbbbbbbbbbbb', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '[{"product_id": "11111111-2222-3333-4444-555555555555", "quantity": 1, "price": 12.99}, {"product_id": "33333333-4444-5555-6666-777777777777", "quantity": 2, "price": 2.99}]', 18.97, 'completed', 'delivered', '44444444-5555-6666-7777-888888888888', '66666666-7777-8888-9999-aaaaaaaaaaaa'),
  ('88888888-9999-aaaa-bbbb-cccccccccccc', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '[{"product_id": "22222222-3333-4444-5555-666666666666", "quantity": 2, "price": 9.99}]', 19.98, 'processing', 'in_transit', '55555555-6666-7777-8888-999999999999', '66666666-7777-8888-9999-aaaaaaaaaaaa');

-- Seed data for reviews
INSERT INTO reviews (id, user_id, product_id, rating, comment) VALUES
  ('99999999-aaaa-bbbb-cccc-dddddddddddd', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '11111111-2222-3333-4444-555555555555', 5, 'Excelente pizza, muy bien preparada'),
  ('aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '22222222-3333-4444-5555-666666666666', 4, 'Buena hamburguesa, podría mejorar la presentación');