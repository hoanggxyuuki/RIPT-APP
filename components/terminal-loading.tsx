import { RetroColors } from '@/constants/retro-theme';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

interface TerminalLoadingProps {
  messages?: string[];
  onComplete?: () => void;
  speed?: number; 
}

export function TerminalLoading({ 
  messages = [
    'C:\\> INITIALIZING SYSTEM...',
    'C:\\> LOADING MODULES...',
    'C:\\> CHECKING DEPENDENCIES...',
    'C:\\> STARTING APPLICATION...',
    'C:\\> YOUR SYSTEM HACKED!',
  ],
  onComplete,
  speed = 10 
}: TerminalLoadingProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      if (onComplete) {
        setTimeout(onComplete, 1000);
      }
      return;
    }

    const currentMessage = messages[currentMessageIndex];
    
    if (currentCharIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentMessage[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + '\n');
        setCurrentMessageIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentMessageIndex, messages, speed, onComplete]);

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.screenHeader}>
          <Text style={styles.screenTitle}>╔═══ SYSTEM BOOT ═══╗</Text>
        </View>
        
        <View style={styles.screenBody}>
          <Text style={styles.terminalText}>
            {displayedText}
            {showCursor && currentMessageIndex < messages.length && (
              <Text style={styles.cursor}>█</Text>
            )}
          </Text>
        </View>

        <View style={styles.screenFooter}>
          <Text style={styles.footerText}>
            [{currentMessageIndex}/{messages.length}] LOADING...
          </Text>
        </View>
      </View>

      <View style={styles.scanline} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RetroColors.terminal.bg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  screen: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
  },
  screenHeader: {
    backgroundColor: RetroColors.terminal.secondary,
    borderBottomWidth: 2,
    borderBottomColor: RetroColors.terminal.primary,
    padding: 10,
  },
  screenTitle: {
    color: RetroColors.terminal.textDark,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  screenBody: {
    minHeight: 200,
    padding: 20,
    backgroundColor: RetroColors.terminal.bg,
  },
  terminalText: {
    color: RetroColors.terminal.text,
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    lineHeight: 20,
  },
  cursor: {
    color: RetroColors.terminal.primary,
  },
  screenFooter: {
    backgroundColor: RetroColors.terminal.secondary,
    borderTopWidth: 2,
    borderTopColor: RetroColors.terminal.primary,
    padding: 10,
  },
  footerText: {
    color: RetroColors.terminal.textDark,
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  scanline: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    pointerEvents: 'none',
  },
});
