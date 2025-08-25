import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <StatusBar barStyle="light-content" backgroundColor="#be1e2d" />
      <AppNavigator />
    </AuthProvider>
  );
}

export default App;