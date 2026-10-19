import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

export default function RegistrationScreen({
  onBack,
  onContinue,
}: Props) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable
          style={styles.backButton}
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>
            ←
          </Text>
        </Pressable>

        <Text style={styles.title}>
          Создать аккаунт
        </Text>

        <Text style={styles.subtitle}>
          Заполните данные для регистрации
        </Text>

        {/* Имя */}

        <View style={styles.inputContainer}>

          <Text style={styles.icon}>
            👤
          </Text>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ваше имя"
            placeholderTextColor="#AAA9B2"
          />

        </View>

        {/* Телефон */}

        <View style={styles.inputContainer}>

          <Text style={styles.icon}>
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

          <Text style={styles.icon}>
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

        <Pressable
          style={styles.mainButton}
          onPress={onContinue}
        >
          <Text style={styles.mainButtonText}>
            Продолжить
          </Text>
        </Pressable>

        <View style={styles.bottomText}>

          <Text style={styles.grayText}>
            Уже есть аккаунт?
          </Text>

          <Pressable onPress={onBack}>
            <Text style={styles.link}>
              Войти
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
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 28,
  },

  inputContainer: {
    height: 62,
    width: '100%',

    backgroundColor: '#F8F8FA',
    borderRadius: 18,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 17,
    marginBottom: 14,
  },

  icon: {
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

  mainButton: {
    height: 62,
    width: '100%',

    backgroundColor: '#B000E8',
    borderRadius: 18,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
  },

  mainButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  bottomText: {
    alignItems: 'center',
    marginTop: 25,
  },

  grayText: {
    color: '#AAA9B2',
    fontSize: 14,
    marginBottom: 4,
  },

  link: {
    color: '#B000E8',
    fontSize: 15,
    fontWeight: '600',
  },

});