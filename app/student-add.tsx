import { CustomHeader } from '@/components/custom-header';
import { RetroColors } from '@/constants/retro-theme';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function StudentAddScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!name || !age || !major || !email) {
      Alert.alert('ERROR', 'VUI LÒNG ĐIỀN ĐẦY ĐỦ THÔNG TIN!');
      return;
    }

    Alert.alert(
      'SUCCESS',
      'ĐÃ THÊM SINH VIÊN MỚI!',
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Thêm Sinh Viên" showBack={true} />
      
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>═══ ADD STUDENT ═══</Text>
          </View>

          <View style={styles.cardBody}>
            <Text style={styles.label}>► HỌ VÀ TÊN:</Text>
            <TextInput
              style={styles.input}
              placeholder="..."
              placeholderTextColor={RetroColors.terminal.dark}
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>► TUỔI:</Text>
            <TextInput
              style={styles.input}
              placeholder="..."
              placeholderTextColor={RetroColors.terminal.dark}
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />

            <Text style={styles.label}>► NGÀNH HỌC:</Text>
            <TextInput
              style={styles.input}
              placeholder="..."
              placeholderTextColor={RetroColors.terminal.dark}
              value={major}
              onChangeText={setMajor}
            />

            <Text style={styles.label}>► EMAIL:</Text>
            <TextInput
              style={styles.input}
              placeholder="..."
              placeholderTextColor={RetroColors.terminal.dark}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => router.back()}
              >
                <Text style={styles.cancelButtonText}>[ HỦY ]</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>[ THÊM ]</Text>
              </TouchableOpacity>
            </View>
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
    fontSize: 14,
    color: RetroColors.terminal.text,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 30,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 2,
    borderColor: RetroColors.terminal.dark,
    padding: 15,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: RetroColors.terminal.dark,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  submitButton: {
    flex: 1,
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 2,
    borderColor: RetroColors.terminal.primary,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: RetroColors.terminal.text,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});
