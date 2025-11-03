import { RetroColors } from '@/constants/retro-theme';
import { useRouter } from 'expo-router';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>╔═══════════════════════╗</Text>
        <Text style={styles.headerTitle}>║   REACT NATIVE APP   ║</Text>
        <Text style={styles.headerSubtitle}>║     RETRO EDITION     ║</Text>
        <Text style={styles.headerText}>╚═══════════════════════╝</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeText}>► XIN CHÀO REACT NATIVE!</Text>
          <Text style={styles.blinkText}>█</Text>
        </View>

        <View style={styles.menu}>
          <Text style={styles.menuTitle}>═══ DANH SÁCH BÀI TẬP ═══</Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/profile')}
          >
            <Text style={styles.buttonText}>[4] DANH THIẾP CÁ NHÂN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/bai5')}
          >
            <Text style={styles.buttonText}>[5] TÍNH ĐIỂM TRUNG BÌNH</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/bai6')}
          >
            <Text style={styles.buttonText}>[6] ĐỔI MÀU NỀN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/bai7')}
          >
            <Text style={styles.buttonText}>[7] DANH SÁCH CÔNG VIỆC</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/bai10')}
          >
            <Text style={styles.buttonText}>[10] DANH SÁCH SINH VIÊN</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            style={[styles.button, styles.trollButton]}
            onPress={() => router.push('/hack-slink')}
          >
            <Text style={styles.trollButtonText}>🎭 [HACK SLINK 😈]</Text>
          </TouchableOpacity>
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
    marginVertical: 2,
  },
  headerSubtitle: {
    color: RetroColors.terminal.textDark,
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
    marginVertical: 2,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  welcomeBox: {
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    padding: 20,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: RetroColors.terminal.primary,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginRight: 10,
  },
  blinkText: {
    color: RetroColors.terminal.primary,
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  menu: {
    marginBottom: 30,
  },
  menuTitle: {
    color: RetroColors.terminal.primary,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 20,
    textAlign: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: RetroColors.terminal.dark,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    padding: 15,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: RetroColors.terminal.text,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 2,
  },
  separator: {
    height: 2,
    backgroundColor: RetroColors.terminal.dark,
    marginVertical: 15,
  },
  trollButton: {
    borderColor: '#FF00FF',
    backgroundColor: '#1a001a',
  },
  trollButtonText: {
    color: '#FF00FF',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
  },
  footer: {
    borderTopWidth: 2,
    borderTopColor: RetroColors.terminal.dark,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 20,
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
  footerCopyright: {
    color: RetroColors.terminal.dark,
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginVertical: 5,
  },
});
