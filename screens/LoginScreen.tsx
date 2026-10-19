import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {
  phone: string;
  password: string;

  setPhone: (value: string) => void;
  setPassword: (value: string) => void;

  onLogin: () => void;
  onForgot: () => void;
  onRegister: () => void;
};

export default function LoginScreen({
  phone,
  password,
  setPhone,
  setPassword,
  onLogin,
  onForgot,
  onRegister,
}: Props) {

  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable
          style={styles.backButton}
          onPress={() => {}}
        >
          <Text style={styles.backButtonText}>
            ←
          </Text>
        </Pressable>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        {/* Телефон */}

        <View style={styles.inputContainer}>

          <Text style={styles.inputIcon}>
            📞
          </Text>

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#AAA9B2"
            keyboardType="phone-pad"
          />

        </View>

        {/* Пароль */}

        <View style={styles.inputContainer}>

          <Text style={styles.inputIcon}>
            🔒
          </Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Пароль"
            placeholderTextColor="#AAA9B2"
            secureTextEntry={!showPassword}
          />

          <Pressable
            onPress={() =>
              setShowPassword(!showPassword)
            }
          >
            <Text style={styles.eye}>
              {showPassword ? '👁' : '👁‍🗨'}
            </Text>
          </Pressable>

        </View>

        {/* Забыли пароль */}

        <Pressable
          style={styles.forgotButton}
          onPress={onForgot}
        >
          <Text style={styles.forgotText}>
            Забыли пароль?
          </Text>
        </Pressable>

        {/* Войти */}

        <Pressable
          style={styles.mainButton}
          onPress={onLogin}
        >
          <Text style={styles.mainButtonText}>
            Войти
          </Text>
        </Pressable>

        {/* Регистрация */}

        <View style={styles.registerContainer}>

          <Text style={styles.registerText}>
            У вас нет аккаунта?
          </Text>

          <Pressable onPress={onRegister}>
            <Text style={styles.registerLink}>
              Зарегистрироваться
            </Text>
          </Pressable>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 34,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 38,
  },

  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },

  title: {
    color: '#1B1923',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 31,
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 16,
    marginTop: 3,
    marginBottom: 28,
  },

  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 17,
    marginBottom: 14,
  },

  inputIcon: {
    fontSize: 18,
    marginRight: 12,
    opacity: 0.65,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 16,
  },

  eye: {
    fontSize: 19,
    opacity: 0.5,
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 2,
    marginBottom: 25,
  },

  forgotText: {
    color: '#B000E8',
    fontSize: 15,
    fontWeight: '600',
  },

  mainButton: {
    width: '100%',
    height: 62,
    backgroundColor: '#B000E8',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  registerContainer: {
    alignItems: 'center',
    marginTop: 25,
  },

  registerText: {
    color: '#AAA9B2',
    fontSize: 14,
    marginBottom: 4,
  },

  registerLink: {
    color: '#B000E8',
    fontSize: 15,
    fontWeight: '600',
  },

});