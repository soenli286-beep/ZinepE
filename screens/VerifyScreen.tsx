import React from 'react';

import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {
  phone: string;

  code: string[];

  setCode: React.Dispatch<
    React.SetStateAction<string[]>
  >;

  onBack: () => void;
  onContinue: () => void;
};

export default function VerifyScreen({
  phone,
  code,
  setCode,
  onBack,
  onContinue,
}: Props) {

  const handleCodeChange = (
    value: string,
    index: number
  ) => {

    const number = value.replace(
      /[^0-9]/g,
      ''
    );

    const newCode = [...code];

    newCode[index] = number.slice(-1);

    setCode(newCode);
  };

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
            Подтвердить номер
          </Text>

          <Text style={styles.subtitle}>
            Мы только что отправили код на
            {'\n'}

            <Text style={styles.phoneText}>
              {phone || '+7 (700) 555 77 55'}
            </Text>
          </Text>

          <View style={styles.codeContainer}>

            {code.map((item, index) => (

              <TextInput
                key={index}
                style={styles.codeInput}
                value={item}
                onChangeText={(value) =>
                  handleCodeChange(
                    value,
                    index
                  )
                }
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
              />

            ))}

          </View>

          <Pressable
            style={styles.mainButton}
            onPress={onContinue}
          >
            <Text style={styles.mainButtonText}>
              Продолжить
            </Text>
          </Pressable>

          <Pressable
            style={styles.resendButton}
            onPress={() =>
              Alert.alert(
                'Код отправлен',
                'Новый код отправлен на ваш номер'
              )
            }
          >
            <Text style={styles.resendText}>
              Отправить код еще раз
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

  phoneText: {
    color: '#1B1923',
    fontWeight: '600',
  },

  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 28,
  },

  codeInput: {
    width: 54,
    height: 58,
    backgroundColor: '#F8F8FA',
    borderRadius: 16,
    color: '#1B1923',
    fontSize: 24,
    fontWeight: '700',
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

  resendButton: {
    alignItems: 'center',
    marginTop: 25,
  },

  resendText: {
    color: '#AAA9B2',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

});