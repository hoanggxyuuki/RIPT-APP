import { RetroColors } from '@/constants/retro-theme';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>╔═══════════════════════╗</Text>
        <Text style={styles.headerTitle}>║       ABOUT APP       ║</Text>
        <Text style={styles.headerText}>╚═══════════════════════╝</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>► THÔNG TIN ỨNG DỤNG</Text>
          <View style={styles.box}>
            <Text style={styles.text}>APP NAME: REACT NATIVE</Text>
            <Text style={styles.text}>VERSION: 1.0.0</Text>
            <Text style={styles.text}>BUILD: 2025.11.03</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>► TÍNH NĂNG</Text>
          <View style={styles.box}>
            <Text style={styles.bulletText}>• DANH THIẾP CÁ NHÂN</Text>
            <Text style={styles.bulletText}>• TÍNH ĐIỂM TRUNG BÌNH</Text>
            <Text style={styles.bulletText}>• ĐỔI MÀU NGẪU NHIÊN</Text>
            <Text style={styles.bulletText}>• QUẢN LÝ CÔNG VIỆC</Text>
            <Text style={styles.bulletText}>• DANH SÁCH SINH VIÊN</Text>
          </View>
        </View>

                                                               
                                                               
                                                               
        <View style={styles.asciiArt}>
          <Text style={styles.asciiText}></Text>
<Text style={styles.asciiText}>░██           ░████                ░████                       </Text>
<Text style={styles.asciiText}>░██          ░██ ██               ░██ ░██                      </Text>
<Text style={styles.asciiText}>░████████   ░██  ██   ░██    ░██ ░██ ░████ ░██░████  ░███████  </Text>
<Text style={styles.asciiText}>░██    ░██ ░██   ██    ░██  ░██  ░██░██░██ ░███     ░██    ░██ </Text>
<Text style={styles.asciiText}>░██    ░██ ░█████████   ░█████   ░████ ░██ ░██      ░██        </Text>
<Text style={styles.asciiText}>░██    ░██      ░██    ░██  ░██   ░██ ░██  ░██      ░██    ░██ </Text>
<Text style={styles.asciiText}>░██    ░██      ░██   ░██    ░██   ░████   ░██       ░███████ </Text> 
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
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    color: RetroColors.terminal.primary,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 10,
  },
  box: {
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 2,
    borderColor: RetroColors.terminal.primary,
    padding: 15,
  },
  text: {
    color: RetroColors.terminal.text,
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginVertical: 3,
  },
  bulletText: {
    color: RetroColors.terminal.text,
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginVertical: 2,
  },
  asciiArt: {
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 2,
    borderColor: RetroColors.terminal.dark,
    padding: 20,
  },
  asciiText: {
    color: RetroColors.terminal.primary,
    fontSize: 5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    lineHeight: 8,
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
});
