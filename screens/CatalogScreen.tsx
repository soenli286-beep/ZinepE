import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import BottomNavigation from '../components/BottomNavigation';
import { colors } from '../styles/colors';

type Props = {
  onHome: () => void;
  onProfile: () => void;
};

const products = [
  {
    title: 'Популярное предложение',
    description: 'Лучший вариант для пользователей',
    price: '5 000 ₸',
    icon: '🛍️',
  },
  {
    title: 'Специальная услуга',
    description: 'Качественное обслуживание',
    price: '7 500 ₸',
    icon: '💎',
  },
  {
    title: 'Новое предложение',
    description: 'Новая коллекция товаров',
    price: '9 900 ₸',
    icon: '🎁',
  },
  {
    title: 'Лучший выбор',
    description: 'Рекомендуется пользователями',
    price: '12 000 ₸',
    icon: '⭐',
  },
];

export default function CatalogScreen({
  onHome,
  onProfile,
}: Props) {

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.header}>

            <Text style={styles.title}>
              Каталог
            </Text>

            <Text style={styles.subtitle}>
              Найдите подходящее предложение
            </Text>

          </View>

          <View style={styles.search}>

            <Text style={styles.searchIcon}>
              🔎
            </Text>

            <TextInput
              placeholder="Поиск"
              placeholderTextColor="#AAA9B2"
              style={styles.searchInput}
            />

          </View>

          <View style={styles.filterRow}>

            <View style={styles.filterActive}>
              <Text style={styles.filterActiveText}>
                Все
              </Text>
            </View>

            <View style={styles.filter}>
              <Text style={styles.filterText}>
                Еда
              </Text>
            </View>

            <View style={styles.filter}>
              <Text style={styles.filterText}>
                Услуги
              </Text>
            </View>

            <View style={styles.filter}>
              <Text style={styles.filterText}>
                Товары
              </Text>
            </View>

          </View>

          <Text style={styles.resultText}>
            Популярные предложения
          </Text>

          {products.map((item, index) => (

            <View
              key={index}
              style={styles.product}
            >

              <View style={styles.productImage}>
                <Text style={styles.productIcon}>
                  {item.icon}
                </Text>
              </View>

              <View style={styles.productInfo}>

                <Text style={styles.productTitle}>
                  {item.title}
                </Text>

                <Text style={styles.productDescription}>
                  {item.description}
                </Text>

                <Text style={styles.price}>
                  {item.price}
                </Text>

              </View>

              <Text style={styles.arrow}>
                ›
              </Text>

            </View>

          ))}

        </ScrollView>

        <BottomNavigation
          active="Catalog"
          onHome={onHome}
          onCatalog={() => {}}
          onProfile={onProfile}
        />

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
    backgroundColor: '#FFFFFF',
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
  },

  subtitle: {
    color: colors.secondaryText,
    fontSize: 14,
    marginTop: 5,
  },

  search: {
    height: 56,
    backgroundColor: colors.input,
    borderRadius: 16,

    marginHorizontal: 24,
    marginTop: 22,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
  },

  filterRow: {
    flexDirection: 'row',

    paddingHorizontal: 24,
    marginTop: 20,

    gap: 8,
  },

  filterActive: {
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    height: 38,

    borderRadius: 19,

    justifyContent: 'center',
  },

  filterActiveText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },

  filter: {
    backgroundColor: colors.input,
    paddingHorizontal: 18,
    height: 38,

    borderRadius: 19,

    justifyContent: 'center',
  },

  filterText: {
    color: colors.secondaryText,
    fontSize: 13,
  },

  resultText: {
    marginHorizontal: 24,
    marginTop: 28,

    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },

  product: {
    marginHorizontal: 24,
    marginTop: 14,

    minHeight: 100,

    borderWidth: 1,
    borderColor: '#F0F0F3',

    borderRadius: 18,

    padding: 12,

    flexDirection: 'row',
    alignItems: 'center',
  },

  productImage: {
    width: 75,
    height: 75,

    borderRadius: 16,

    backgroundColor: '#F8E9FC',

    justifyContent: 'center',
    alignItems: 'center',
  },

  productIcon: {
    fontSize: 32,
  },

  productInfo: {
    flex: 1,
    marginLeft: 13,
  },

  productTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
  },

  productDescription: {
    color: colors.secondaryText,
    fontSize: 12,
    marginTop: 5,
  },

  price: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 6,
  },

  arrow: {
    color: colors.primary,
    fontSize: 30,
    marginLeft: 8,
  },
});