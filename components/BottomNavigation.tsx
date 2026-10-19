import React from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../styles/colors';

type Props = {
  active: string;
  onHome: () => void;
  onCatalog: () => void;
  onProfile: () => void;
};

export default function BottomNavigation({
  active,
  onHome,
  onCatalog,
  onProfile,
}: Props) {
  return (
    <View style={styles.container}>

      <Pressable
        style={styles.item}
        onPress={onHome}
      >
        <Text
          style={[
            styles.icon,
            active === 'Home' && styles.active,
          ]}
        >
          🏠
        </Text>

        <Text
          style={[
            styles.label,
            active === 'Home' && styles.active,
          ]}
        >
          Главная
        </Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={onCatalog}
      >
        <Text
          style={[
            styles.icon,
            active === 'Catalog' && styles.active,
          ]}
        >
          🔎
        </Text>

        <Text
          style={[
            styles.label,
            active === 'Catalog' && styles.active,
          ]}
        >
          Каталог
        </Text>
      </Pressable>

      <Pressable
        style={styles.item}
        onPress={onProfile}
      >
        <Text
          style={[
            styles.icon,
            active === 'Profile' && styles.active,
          ]}
        >
          👤
        </Text>

        <Text
          style={[
            styles.label,
            active === 'Profile' && styles.active,
          ]}
        >
          Профиль
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 78,
    borderTopWidth: 1,
    borderTopColor: '#EEEEF2',

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    paddingBottom: 8,
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },

  icon: {
    fontSize: 22,
    marginBottom: 4,
    opacity: 0.45,
  },

  label: {
    fontSize: 12,
    color: colors.secondaryText,
  },

  active: {
    color: colors.primary,
    opacity: 1,
  },
});