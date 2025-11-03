import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import 'react-native-reanimated';

import { TerminalLoading } from '@/components/terminal-loading';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <TerminalLoading 
        messages={[
          'C:\\> INITIALIZING REACT NATIVE...',
          'C:\\> LOADING EXPO ROUTER...',
          'C:\\> CHECKING COMPONENTS...',
          'C:\\> CONFIGURING RETRO MODE...',
          'C:\\> YOUR SYSTEM HACKED!',
        ]}
        onComplete={() => setIsLoading(false)}
        speed={10}
      />
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="retro-menu" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="bai5" options={{ headerShown: false }} />
        <Stack.Screen name="bai6" options={{ headerShown: false }} />
        <Stack.Screen name="bai7" options={{ headerShown: false }} />
        <Stack.Screen name="bai10" options={{ headerShown: false }} />
        <Stack.Screen name="student-detail" options={{ headerShown: false }} />
        <Stack.Screen name="student-add" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
