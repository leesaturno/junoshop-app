import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt with:', { username, password });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/bienvenida.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>¡Bienvenido!</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor={theme.colors.text}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor={theme.colors.text}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing.xl
  },
  image: {
    width: '80%',
    height: '60%'
  },
  welcomeText: {
    fontSize: theme.typography.h1.fontSize,
    color: theme.colors.text,
    marginTop: theme.spacing.lg,
    fontWeight: 'bold'
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    color: theme.colors.text
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginTop: theme.spacing.md
  },
  loginButtonText: {
    color: theme.colors.text,
    fontSize: theme.typography.caption.fontSize,
    fontWeight: 'bold'
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: theme.spacing.md
  },
  forgotPasswordText: {
    color: theme.colors.primary,
    fontSize: theme.typography.caption.fontSize
  }
});