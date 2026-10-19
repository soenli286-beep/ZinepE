import React from 'react';

import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import BottomNavigation from '../components/BottomNavigation';
import { colors } from '../styles/colors';

type Props = {
  onHome: () => void;
  onCatalog: () => void;
  onLogout: () => void;
};

export default function ProfileScreen({
  onHome,
  onCatalog,
  onLogout,
}: Props) {

  const showMessage = (title: string) => {
    Alert.alert(
      title,
      'Этот раздел будет доступен в следующей версии.'
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <View style={styles.content}>

          <Text style={styles.title}>
            Профиль
          </Text>

          {/* User */}

          <View style={styles.userCard}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                И
              </Text>
            </View>

            <View style={styles.userInfo}>

              <Text style={styles.name}>
                Ілияс
              </Text>

              <Text style={styles.phone}>
                +7 (775) 600 28 57
              </Text>

            </View>

            <Text style={styles.arrow}>
              ›
            </Text>

          </View>

          {/* Menu */}

          <Text style={styles.sectionTitle}>
            Настройки
          </Text>

          <Pressable
            style={styles.menuItem}
            onPress={() => showMessage('Личные данные')}
          >
            <View style={styles.menuIcon}>
              <Text>👤</Text>
            </View>

            <Text style={styles.menuText}>
              Личные данные
            </Text>

            <Text style={styles.menuArrow}>
              ›
            </Text>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => showMessage('Уведомления')}
          >
            <View style={styles.menuIcon}>
              <Text>🔔</Text>
            </View>

            <Text style={styles.menuText}>
              Уведомления
            </Text>

            <Text style={styles.menuArrow}>
              ›
            </Text>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => showMessage('Безопасность')}
          >
            <View style={styles.menuIcon}>
              <Text>🔒</Text>
            </View>

            <Text style={styles.menuText}>
              Безопасность
            </Text>

            <Text style={styles.menuArrow}>
              ›
            </Text>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => showMessage('О приложении')}
          >
            <View style={styles.menuIcon}>
              <Text>ℹ️</Text>
            </View>

            <Text style={styles.menuText}>
              О приложении
            </Text>

            <Text style={styles.menuArrow}>
              ›
            </Text>
          </Pressable>

          {/* Logout */}

          <Pressable
            style={styles.logoutButton}
            onPress={onLogout}
          >
            <Text style={styles.logoutText}>
              Выйти из аккаунта
            </Text>
          </Pressable>

        </View>

        <BottomNavigation
          active="Profile"
          onHome={onHome}
          onCatalog={onCatalog}
          onProfile={() => {}}
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

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
  },

  userCard: {
    marginTop: 24,

    backgroundColor: colors.input,
    borderRadius: 20,

    padding: 16,

    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: '#EFD2F7',

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '700',
  },

  userInfo: {
    flex: 1,
    marginLeft: 14,
  },

  name: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
  },

  phone: {
    color: colors.secondaryText,
    fontSize: 13,
    marginTop: 5,
  },

  arrow: {
    color: colors.primary,
    fontSize: 28,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',

    marginTop: 30,
    marginBottom: 10,
  },

  menuItem: {
    height: 62,

    flexDirection: 'row',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F3',
  },

  menuIcon: {
    width: 40,
    height: 40,

    borderRadius: 13,
    backgroundColor: colors.input,

    justifyContent: 'center',
    alignItems: 'center',
  },

  menuText: {
    flex: 1,

    color: colors.text,
    fontSize: 15,
    marginLeft: 12,
  },

  menuArrow: {
    color: colors.secondaryText,
    fontSize: 26,
  },

  logoutButton: {
    height: 56,

    borderRadius: 16,

    borderWidth: 1,
    borderColor: '#FFD7D7',

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 28,
  },

  logoutText: {
    color: '#FF3B30',
    fontSize: 15,
    fontWeight: '600',
  },
});