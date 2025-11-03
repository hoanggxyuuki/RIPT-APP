import { CustomHeader } from '@/components/custom-header';
import { RetroColors } from '@/constants/retro-theme';
import { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AverageScoreScreen() {
  const [math, setMath] = useState('');
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [average, setAverage] = useState<number | null>(null);

  const calculateAverage = () => {
    const mathScore = parseFloat(math) || 0;
    const physicsScore = parseFloat(physics) || 0;
    const chemistryScore = parseFloat(chemistry) || 0;
    
    const avg = (mathScore + physicsScore + chemistryScore) / 3;
    setAverage(avg);
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Tính Điểm Trung Bình" showBack={true} />
      
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>═══ CALCULATOR.EXE ═══</Text>
          </View>

          <View style={styles.cardBody}>
            <Text style={styles.label}>► ĐIỂM TOÁN:</Text>
            <TextInput
              style={styles.input}
              placeholder="0.0"
              placeholderTextColor={RetroColors.terminal.dark}
              keyboardType="numeric"
              value={math}
              onChangeText={setMath}
            />

            <Text style={styles.label}>► ĐIỂM LÝ:</Text>
            <TextInput
              style={styles.input}
              placeholder="0.0"
              placeholderTextColor={RetroColors.terminal.dark}
              keyboardType="numeric"
              value={physics}
              onChangeText={setPhysics}
            />

            <Text style={styles.label}>► ĐIỂM HÓA:</Text>
            <TextInput
              style={styles.input}
              placeholder="0.0"
              placeholderTextColor={RetroColors.terminal.dark}
              keyboardType="numeric"
              value={chemistry}
              onChangeText={setChemistry}
            />

            <TouchableOpacity style={styles.button} onPress={calculateAverage}>
              <Text style={styles.buttonText}>[ TÍNH ĐIỂM ]</Text>
            </TouchableOpacity>

            {average !== null && (
              <View style={styles.resultContainer}>
                <Text style={styles.resultBorder}>┌──────────────┐</Text>
                <Text style={styles.resultText}>│ ĐIỂM TB: {average.toFixed(2)}</Text>
                <Text style={styles.resultText}>
                  │ XẾP LOẠI: {average >= 8 ? 'GIỎI' : average >= 6.5 ? 'KHÁ' : average >= 5 ? 'TB' : 'YẾU'}
                </Text>
                <Text style={styles.resultBorder}>└──────────────┘</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
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
  },
  card: {
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
  },
  cardHeader: {
    backgroundColor: RetroColors.terminal.secondary,
    borderBottomWidth: 2,
    borderBottomColor: RetroColors.terminal.primary,
    padding: 10,
  },
  cardTitle: {
    color: RetroColors.terminal.textDark,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  cardBody: {
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: RetroColors.terminal.primary,
    marginTop: 15,
    marginBottom: 5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  input: {
    borderWidth: 2,
    borderColor: RetroColors.terminal.primary,
    backgroundColor: RetroColors.terminal.bg,
    padding: 12,
    fontSize: 16,
    color: RetroColors.terminal.text,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  button: {
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: RetroColors.terminal.text,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  resultContainer: {
    marginTop: 25,
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 2,
    borderColor: RetroColors.terminal.primary,
    padding: 15,
  },
  resultBorder: {
    fontSize: 16,
    color: RetroColors.terminal.primary,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: RetroColors.terminal.text,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginVertical: 5,
  },
});
