import { CustomHeader } from '@/components/custom-header';
import { RetroColors } from '@/constants/retro-theme';
import { useLocalSearchParams } from 'expo-router';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function StudentDetailScreen() {
  const params = useLocalSearchParams();
  const { name, age, major, email } = params;

  return (
    <View style={styles.container}>
      <CustomHeader title="Chi Tiết Sinh Viên" showBack={true} />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>┌─ STUDENT.INFO ─┐</Text>
          </View>

          <View style={styles.cardBody}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {typeof name === 'string' ? name.charAt(0).toUpperCase() : 'S'}
                </Text>
              </View>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.label}>► HỌ VÀ TÊN:</Text>
              <Text style={styles.value}>{name}</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoSection}>
              <Text style={styles.label}>► TUỔI:</Text>
              <Text style={styles.value}>{age}</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoSection}>
              <Text style={styles.label}>► NGÀNH HỌC:</Text>
              <Text style={styles.value}>{major}</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoSection}>
              <Text style={styles.label}>► EMAIL:</Text>
              <Text style={styles.value}>{email}</Text>
            </View>
          </View>

          <View style={styles.cardFooter}>
            <Text style={styles.cardTitle}>└──────────────┘</Text>
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
  },
  scrollContent: {
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
  cardFooter: {
    backgroundColor: RetroColors.terminal.secondary,
    borderTopWidth: 2,
    borderTopColor: RetroColors.terminal.primary,
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
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: RetroColors.terminal.text,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  infoSection: {
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: RetroColors.terminal.primary,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  value: {
    fontSize: 16,
    color: RetroColors.terminal.text,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    paddingLeft: 15,
  },
  separator: {
    height: 1,
    backgroundColor: RetroColors.terminal.dark,
    marginVertical: 5,
  },
});
