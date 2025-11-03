import { useRouter } from 'expo-router';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CustomHeaderProps {
  title: string;
  showBack?: boolean;
}

export function CustomHeader({ title, showBack = false }: CustomHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTop} />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {showBack && (
            <TouchableOpacity 
              onPress={() => router.back()} 
              style={styles.backButton}
              activeOpacity={0.8}
            >
              <Text style={styles.backButtonText}>◄ BACK</Text>
            </TouchableOpacity>
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
  },
  headerTop: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    backgroundColor: '#1a1a1a',
  },
  header: {
    backgroundColor: '#00AA00',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: '#00FF00',
    borderBottomColor: '#006600',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerBottom: {
    height: 2,
    backgroundColor: '#003300',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#00FF00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 15,
  },
  backButtonText: {
    color: '#00FF00',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 2,
    textShadowColor: '#00FF00',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0,
  },
});
