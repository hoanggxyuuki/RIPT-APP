import { RetroColors } from '@/constants/retro-theme';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface RetroButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export function RetroButton({ title, onPress, variant = 'primary' }: RetroButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' && styles.buttonSecondary
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    padding: 15,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: RetroColors.terminal.secondary,
    borderColor: RetroColors.terminal.primary,
  },
  buttonText: {
    color: RetroColors.terminal.text,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 2,
  },
});
