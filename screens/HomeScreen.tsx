import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import BottomNavigation from '../components/BottomNavigation';
import { colors } from '../styles/colors';

type Props = {
  onCatalog: () => void;
  onProfile: () => void;
};

export default function HomeScreen({
  onCatalog,
  onProfile,
}: Props) {

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          {/* Header */}

          <View style={styles.header}>

            <View>
              <Text style={styles.smallText}>
                Добро пожаловать 👋
              </Text>

              <Text style={styles.title}>
                Главная
              </Text>
            </View>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                Р
              </Text>
            </View>

          </View>

          {/* Search */}

          <View style={styles.search}>
            <Text style={styles.searchIcon}>
              🔎
            </Text>

            <Text style={styles.searchText}>
              Поиск
            </Text>
          </View>

          {/* Banner */}

          <View style={styles.banner}>

            <View style={styles.bannerContent}>

              <Text style={styles.bannerTitle}>
                Специальное предложение
              </Text>

              <Text style={styles.bannerText}>
                Найдите лучшие предложения
                {'\n'}
                прямо сейчас
              </Text>

            </View>

            <Text style={styles.bannerEmoji}>
              ✨
            </Text>

          </View>

          {/* Categories */}

          <Text style={styles.sectionTitle}>
            Категории
          </Text>

          <View style={styles.categories}>

            <View style={styles.category}>
              <Text style={styles.categoryIcon}>
                🍔
              </Text>

              <Text style={styles.categoryText}>
                Еда
              </Text>
            </View>

            <View style={styles.category}>
              <Text style={styles.categoryIcon}>
                🛍️
              </Text>

              <Text style={styles.categoryText}>
                Магазины
              </Text>
            </View>

            <View style={styles.category}>
              <Text style={styles.categoryIcon}>
                💆
              </Text>

              <Text style={styles.categoryText}>
                Услуги
              </Text>
            </View>

            <View style={styles.category}>
              <Text style={styles.categoryIcon}>
                🎁
              </Text>

              <Text style={styles.categoryText}>
                Другое
              </Text>
            </View>

          </View>

          {/* Popular */}

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Популярное
            </Text>

            <Text
              style={styles.showAll}
              onPress={onCatalog}
            >
              Все
            </Text>

          </View>

          <View style={styles.card}>

            <View style={styles.cardImage}>
              <Text style={styles.cardEmoji}>
                🛒
              </Text>
            </View>

            <View style={styles.cardContent}>

              <Text style={styles.cardTitle}>
                Популярное предложение
              </Text>

              <Text style={styles.cardDescription}>
                Лучшие товары и услуги
              </Text>

              <Text style={styles.cardPrice}>
                от 5 000 ₸
              </Text>

            </View>

          </View>

          <View style={styles.card}>

            <View style={styles.cardImage}>
              <Text style={styles.cardEmoji}>
                ⭐
              </Text>
            </View>

            <View style={styles.cardContent}>

              <Text style={styles.cardTitle}>
                Выбор пользователей
              </Text>

              <Text style={styles.cardDescription}>
                Самые популярные предложения
              </Text>

              <Text style={styles.cardPrice}>
                от 3 500 ₸
              </Text>

            </View>

          </View>

        </ScrollView>

        <BottomNavigation
          active="Home"
          onHome={() => {}}
          onCatalog={onCatalog}
          onProfile={onProfile}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 18,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallText: {
    fontSize: 14,
    color: colors.secondaryText,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginTop: 4,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,

    backgroundColor: '#F3D8FA',

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '700',
  },

  search: {
    height: 56,
    backgroundColor: colors.input,
    borderRadius: 16,

    marginHorizontal: 24,
    marginTop: 24,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 18,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchText: {
    color: colors.secondaryText,
    fontSize: 15,
  },

  banner: {
    marginHorizontal: 24,
    marginTop: 20,

    minHeight: 150,
    borderRadius: 22,

    backgroundColor: colors.primary,

    padding: 22,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bannerContent: {
    flex: 1,
  },

  bannerTitle: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 8,
  },

  bannerText: {
    color: '#F8DFFF',
    fontSize: 14,
    lineHeight: 20,
  },

  bannerEmoji: {
    fontSize: 55,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 24,
    marginTop: 18,
  },

  category: {
    width: 75,
    alignItems: 'center',
  },

  categoryIcon: {
    width: 60,
    height: 60,

    borderRadius: 20,
    backgroundColor: colors.input,

    textAlign: 'center',
    textAlignVertical: 'center',

    fontSize: 25,
  },

  categoryText: {
    fontSize: 12,
    color: colors.text,
    marginTop: 7,
    textAlign: 'center',
  },

  sectionHeader: {
    marginHorizontal: 24,
    marginTop: 28,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  showAll: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },

  card: {
    marginHorizontal: 24,
    marginTop: 14,

    backgroundColor: '#FFFFFF',

    borderRadius: 18,

    borderWidth: 1,
    borderColor: '#F0F0F3',

    padding: 12,

    flexDirection: 'row',
  },

  cardImage: {
    width: 80,
    height: 80,

    borderRadius: 15,
    backgroundColor: '#F8E9FC',

    justifyContent: 'center',
    alignItems: 'center',
  },

  cardEmoji: {
    fontSize: 35,
  },

  cardContent: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },

  cardTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
  },

  cardDescription: {
    color: colors.secondaryText,
    fontSize: 12,
    marginTop: 5,
  },

  cardPrice: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 6,
  },
});
