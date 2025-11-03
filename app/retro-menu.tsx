import { RetroButton } from '@/components/retro-button';
import { RetroColors } from '@/constants/retro-theme';
import { useRouter } from 'expo-router';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RetroMenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>╔═══════════════════════╗</Text>
        <Text style={styles.headerTitle}>    RETRO APP MENU</Text>
        <Text style={styles.headerText}>╚═══════════════════════╝</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <View style={styles.menu}>
          <Text style={styles.menuTitle}>► DANH SÁCH BÀI TẬP:</Text>
          
          <RetroButton
            title="[4] DANH THIẾP CÁ NHÂN"
            onPress={() => router.push('/profile')}
          />

          <RetroButton
            title="[5] TÍNH ĐIỂM TRUNG BÌNH"
            onPress={() => router.push('/bai5')}
          />

          <RetroButton
            title="[6] ĐỔI MÀU NỀN"
            onPress={() => router.push('/bai6')}
          />

          <RetroButton
            title="[7] DANH SÁCH CÔNG VIỆC"
            onPress={() => router.push('/bai7')}
          />

          <RetroButton
            title="[10] DANH SÁCH SINH VIÊN"
            onPress={() => router.push('/bai10')}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>───────────────────────</Text>
          <Text style={styles.footerInfo}>PRESS BUTTON TO START</Text>
          <Text style={styles.footerText}>───────────────────────</Text>
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
  header: {
    backgroundColor: RetroColors.terminal.secondary,
    borderBottomWidth: 3,
    borderBottomColor: RetroColors.terminal.primary,
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    color: RetroColors.terminal.textDark,
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  headerTitle: {
    color: RetroColors.terminal.textDark,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
    marginVertical: 5,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  menu: {
    marginBottom: 30,
  },
  menuTitle: {
    color: RetroColors.terminal.primary,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 15,
  },
  footer: {
    borderTopWidth: 2,
    borderTopColor: RetroColors.terminal.dark,
    paddingTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: RetroColors.terminal.dark,
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  footerInfo: {
    color: RetroColors.terminal.primary,
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginVertical: 5,
  },
});
