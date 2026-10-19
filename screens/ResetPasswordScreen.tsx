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
  password: string;
  repeatPassword: string;

  setPassword: (value: string) => void;
  setRepeatPassword: (value: string) => void;

  onBack: () => void;
  onContinue: () => void;
};

export default function ResetPasswordScreen({
  password,
  repeatPassword,
  setPassword,
  setRepeatPassword,
  onBack,
  onContinue,
}: Props) {

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showRepeatPassword,
    setShowRepeatPassword,
  ] = useState(false);

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

        <View style={styles.centerContent}>

          <Text style={styles.title}>
            Сбросить пароль
          </Text>

          <Text style={styles.subtitle}>
            Не менее 8 символов, с
            {'\n'}
            прописными и строчными буквами
          </Text>

          {/* Новый пароль */}

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

          {/* Повтор */}

          <View style={styles.inputContainer}>

            <Text style={styles.inputIcon}>
              🔒
            </Text>

            <TextInput
              style={styles.input}
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              placeholder="Повторить пароль"
              placeholderTextColor="#AAA9B2"
              secureTextEntry={
                !showRepeatPassword
              }
            />

            <Pressable
              onPress={() =>
                setShowRepeatPassword(
                  !showRepeatPassword
                )
              }
            >
              <Text style={styles.eye}>
                {showRepeatPassword
                  ? '👁'
                  : '👁‍🗨'}
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

  centerContent: {
    marginTop: 60,
  },

  title: {
    color: '#1B1923',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 4,
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

});