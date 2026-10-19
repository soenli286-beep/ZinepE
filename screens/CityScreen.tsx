import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

const cities = [
  'Алматы',
  'Астана',
  'Шымкент',
  'Караганда',
  'Актобе',
];

export default function CityScreen({
  onBack,
  onContinue,
}: Props) {

  const [selectedCity, setSelectedCity] =
    useState('Алматы');

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
          Выберите город
        </Text>

        <Text style={styles.subtitle}>
          Выберите город, чтобы мы могли
          {'\n'}
          показать актуальные предложения
        </Text>

        <View style={styles.cityList}>

          {cities.map((city) => (

            <Pressable
              key={city}
              style={[
                styles.city,
                selectedCity === city &&
                  styles.selectedCity,
              ]}
              onPress={() =>
                setSelectedCity(city)
              }
            >

              <Text
                style={[
                  styles.cityText,
                  selectedCity === city &&
                    styles.selectedCityText,
                ]}
              >
                {city}
              </Text>

              {selectedCity === city && (
                <Text style={styles.check}>
                  ✓
                </Text>
              )}

            </Pressable>

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
    lineHeight: 23,
    marginTop: 5,
    marginBottom: 25,
  },

  cityList: {
    width: '100%',
  },

  city: {
    height: 60,

    backgroundColor: '#F8F8FA',

    borderRadius: 17,

    marginBottom: 12,

    paddingHorizontal: 18,

    flexDirection: 'row',
    alignItems: 'center',
  },

  selectedCity: {
    backgroundColor: '#F7E4FB',
    borderWidth: 1,
    borderColor: '#B000E8',
  },

  cityText: {
    flex: 1,
    color: '#1B1923',
    fontSize: 16,
  },

  selectedCityText: {
    color: '#B000E8',
    fontWeight: '600',
  },

  check: {
    color: '#B000E8',
    fontSize: 22,
    fontWeight: '700',
  },

  mainButton: {
    width: '100%',
    height: 62,

    backgroundColor: '#B000E8',

    borderRadius: 18,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 'auto',
    marginBottom: 25,
  },

  mainButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

});