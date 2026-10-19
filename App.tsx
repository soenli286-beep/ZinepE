import React, { useState } from 'react';

import {
  Alert,
} from 'react-native';

import LoginScreen from './screens/LoginScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import VerifyScreen from './screens/VerifyScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import CityScreen from './screens/CityScreen';

import HomeScreen from './screens/HomeScreen';
import CatalogScreen from './screens/CatalogScreen';
import ProfileScreen from './screens/ProfileScreen';
type Page =
  | 'Login'
  | 'Forget'
  | 'Verify'
  | 'Reset'
  | 'Registration'
  | 'City'
  | 'Home'
  | 'Catalog'
  | 'Profile';

export default function App() {

  const [page, setPage] = useState<Page>('Login');

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [code, setCode] = useState([
    '',
    '',
    '',
    '',
  ]);

  const [repeatPassword, setRepeatPassword] =
    useState('');

  // ==============================
  // LOGIN
  // ==============================

  const handleLogin = () => {

    if (!phone || !password) {
      Alert.alert(
        'Ошибка',
        'Введите номер телефона и пароль'
      );

      return;
    }

    setPage('Home');
  };

  // ==============================
  // FORGET PASSWORD
  // ==============================

  const handleSendCode = () => {

    if (!phone) {
      Alert.alert(
        'Ошибка',
        'Введите номер телефона'
      );

      return;
    }

    setPage('Verify');
  };

  // ==============================
  // VERIFY
  // ==============================

  const handleVerify = () => {

    const enteredCode = code.join('');

    if (enteredCode.length !== 4) {

      Alert.alert(
        'Ошибка',
        'Введите код из 4 цифр'
      );

      return;
    }

    if (enteredCode !== '7854') {

      Alert.alert(
        'Ошибка',
        'Неверный код'
      );

      return;
    }

    setPage('Reset');
  };

  // ==============================
  // RESET
  // ==============================

  const handleResetPassword = () => {

    if (password.length < 8) {

      Alert.alert(
        'Ошибка',
        'Пароль должен содержать минимум 8 символов'
      );

      return;
    }

    if (password !== repeatPassword) {

      Alert.alert(
        'Ошибка',
        'Пароли не совпадают'
      );

      return;
    }

    Alert.alert(
      'Готово',
      'Пароль успешно изменён',
      [
        {
          text: 'Войти',

          onPress: () => {

            setPassword('');
            setRepeatPassword('');
            setCode([
              '',
              '',
              '',
              '',
            ]);

            setPage('Login');
          },
        },
      ]
    );
  };

  // ==============================
  // LOGOUT
  // ==============================

  const handleLogout = () => {

    Alert.alert(
      'Выход',
      'Вы действительно хотите выйти?',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },

        {
          text: 'Выйти',
          style: 'destructive',

          onPress: () => {
            setPage('Login');
          },
        },
      ]
    );
  };

  // ==============================
  // PAGES
  // ==============================

  if (page === 'Login') {

    return (
      <LoginScreen
        phone={phone}
        password={password}

        setPhone={setPhone}
        setPassword={setPassword}

        onLogin={handleLogin}

        onForgot={() =>
          setPage('Forget')
        }

        onRegister={() =>
          setPage('Registration')
        }
      />
    );
  }

  if (page === 'Forget') {

    return (
      <ForgetPasswordScreen
        phone={phone}
        setPhone={setPhone}

        onBack={() =>
          setPage('Login')
        }

        onContinue={handleSendCode}
      />
    );
  }

  if (page === 'Verify') {

    return (
      <VerifyScreen
        phone={phone}

        code={code}
        setCode={setCode}

        onBack={() =>
          setPage('Forget')
        }

        onContinue={handleVerify}
      />
    );
  }

  if (page === 'Reset') {

    return (
      <ResetPasswordScreen
        password={password}
        repeatPassword={repeatPassword}

        setPassword={setPassword}
        setRepeatPassword={setRepeatPassword}

        onBack={() =>
          setPage('Verify')
        }

        onContinue={handleResetPassword}
      />
    );
  }

  if (page === 'Registration') {

    return (
      <RegistrationScreen
        onBack={() =>
          setPage('Login')
        }

        onContinue={() =>
          setPage('City')
        }
      />
    );
  }

  if (page === 'City') {

    return (
      <CityScreen
        onBack={() =>
          setPage('Registration')
        }

        onContinue={() =>
          setPage('Home')
        }
      />
    );
  }

  // ==============================
  // НОВЫЕ 3 ЭКРАНА
  // ==============================

  if (page === 'Home') {

    return (
      <HomeScreen
        onCatalog={() =>
          setPage('Catalog')
        }

        onProfile={() =>
          setPage('Profile')
        }
      />
    );
  }

  if (page === 'Catalog') {

    return (
      <CatalogScreen
        onHome={() =>
          setPage('Home')
        }

        onProfile={() =>
          setPage('Profile')
        }
      />
    );
  }

  if (page === 'Profile') {

    return (
      <ProfileScreen
        onHome={() =>
          setPage('Home')
        }

        onCatalog={() =>
          setPage('Catalog')
        }

        onLogout={handleLogout}
      />
    );
  }

  return null;
}