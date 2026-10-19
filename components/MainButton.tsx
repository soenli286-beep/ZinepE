import React from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import { colors } from '../styles/colors';

type Props = {
  title: string;
  onPress: () => void;
};

export default function MainButton({
  title,
  onPress,
}: Props) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 62,
    backgroundColor: colors.primary,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});