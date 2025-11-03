import { CustomHeader } from '@/components/custom-header';
import { RetroColors } from '@/constants/retro-theme';
import { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ColorChangeScreen() {
  const [backgroundColor, setBackgroundColor] = useState('#00FF00');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    setBackgroundColor(getRandomColor());
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Đổi Màu Nền" showBack={true} />
      
      <View style={styles.content}>
        <View style={styles.screen}>
          <View style={styles.screenHeader}>
            <Text style={styles.screenTitle}>┌─ COLOR.SYS ─┐</Text>
          </View>
          
          <View style={[styles.colorBox, { backgroundColor }]}>
            <Text style={styles.colorLabel}>COLOR:</Text>
            <Text style={styles.colorText}>{backgroundColor}</Text>
          </View>

          <View style={styles.screenFooter}>
            <Text style={styles.screenTitle}>└──────────────┘</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={changeColor}>
          <Text style={styles.buttonText}>[ ĐỔI MÀU ]</Text>
        </TouchableOpacity>

        <Text style={styles.info}>► PRESS BUTTON TO CHANGE COLOR</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RetroColors.terminal.bg,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    marginBottom: 30,
  },
  screenHeader: {
    backgroundColor: RetroColors.terminal.secondary,
    borderBottomWidth: 2,
    borderBottomColor: RetroColors.terminal.primary,
    padding: 10,
  },
  screenFooter: {
    backgroundColor: RetroColors.terminal.secondary,
    borderTopWidth: 2,
    borderTopColor: RetroColors.terminal.primary,
    padding: 10,
  },
  screenTitle: {
    color: RetroColors.terminal.textDark,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  colorBox: {
    height: 200,
    margin: 20,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: RetroColors.terminal.bg,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 10,
  },
  colorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: RetroColors.terminal.bg,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  button: {
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  buttonText: {
    color: RetroColors.terminal.text,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  info: {
    marginTop: 20,
    fontSize: 12,
    color: RetroColors.terminal.primary,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});
