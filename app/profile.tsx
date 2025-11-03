import { CustomHeader } from '@/components/custom-header';
import { RetroColors } from '@/constants/retro-theme';
import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Danh Thiếp Cá Nhân" showBack={true} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>┌─ PROFILE.SYS ─┐</Text>
          </View>
        
          <View style={styles.avatarContainer}>
            <View style={styles.avatarBorder}>
              <Image
                source={require('@/assets/images/favicon.png')}
                style={styles.avatar}
              />
            </View>
          </View>
        
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>► HỌ TÊN:</Text>
              <Text style={styles.value}>Nguyễn Huy Hoàng</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoRow}>
              <Text style={styles.label}>► NGHỀ NGHIỆP:</Text>
              <Text style={styles.value}>Lập trình viên React Native</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoRow}>
              <Text style={styles.label}>► EMAIL:</Text>
              <Text style={styles.value}>duybeo@example.com</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.infoRow}>
              <Text style={styles.label}>► SĐT:</Text>
              <Text style={styles.value}>0123 456 789</Text>
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
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    padding: 0,
    width: '100%',
    maxWidth: 400,
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
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 25,
  },
  avatarBorder: {
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    padding: 5,
    backgroundColor: RetroColors.terminal.bg,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  infoRow: {
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
