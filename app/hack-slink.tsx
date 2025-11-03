import { CustomHeader } from '@/components/custom-header';
import { RetroColors } from '@/constants/retro-theme';
import { useEffect, useState } from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    Vibration,
    View
} from 'react-native';

type TrollMode = 'idle' | 'hacking' | 'virus' | 'matrix' | 'error' | 'success';

export default function HackSlinkScreen() {
  const [trollMode, setTrollMode] = useState<TrollMode>('idle');
  const [hackProgress, setHackProgress] = useState(0);
  const [consoleLines, setConsoleLines] = useState<string[]>([
    '> SYSTEM READY...',
    '> AWAITING COMMAND...',
  ]);
  const [virusCount, setVirusCount] = useState(0);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [blinkState, setBlinkState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkState(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (trollMode === 'matrix') {
      const interval = setInterval(() => {
        const chars = '01アイウエオカキクケコサシスセソタチツテト';
        const newChars = Array(30).fill(0).map(() => 
          chars[Math.floor(Math.random() * chars.length)]
        );
        setMatrixChars(newChars);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [trollMode]);

  const addConsoleLine = (line: string) => {
    setConsoleLines(prev => [...prev.slice(-8), line]);
  };

  const startFakeHack = () => {
    setTrollMode('hacking');
    setHackProgress(0);
    addConsoleLine('> INITIATING HACK SEQUENCE...');
    
    const messages = [
      '> BYPASSING FIREWALL...',
      '> CRACKING ENCRYPTION...',
      '> ACCESSING MAINFRAME...',
      '> DOWNLOADING DATABASE...',
      '> EXTRACTING PASSWORD: "password123"',
      '> STEALING COOKIES... 🍪',
      '> HACKING FBI... ERROR: NICE TRY',
      '> INSTALLING VIRUS.EXE...',
      '> HACK COMPLETE! (NOT REALLY)',
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress < messages.length) {
        addConsoleLine(messages[currentProgress]);
        setHackProgress(((currentProgress + 1) / messages.length) * 100);
        currentProgress++;
        
        if (Platform.OS !== 'web') {
          Vibration.vibrate(50);
        }
      } else {
        clearInterval(interval);
        setTrollMode('success');
        Alert.alert(
          '🎉 HACK SUCCESS!',
         
          [{ text: 'LOL', onPress: () => setTrollMode('idle') }]
        );
      }
    }, 800);
  };

  const unleashVirus = () => {
    setTrollMode('virus');
    setVirusCount(0);
    addConsoleLine('> ⚠️  RELEASING VIRUS...');
    
    if (Platform.OS !== 'web') {
      Vibration.vibrate([100, 50, 100, 50, 100]);
    }

    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 1000);
      setVirusCount(count);
      
      if (count > 0 && count % 5000 === 0) {
        addConsoleLine(`> 🦠 INFECTED: ${count} FILES`);
      }
      
      if (count > 20000) {
        clearInterval(interval);
        Alert.alert(
          '😈 VIRUS ALERT!',
          'Máy bạn vừa bị nhiễm 20000+ virus!\n\n...',
          [{ text: 'Phù!', onPress: () => setTrollMode('idle') }]
        );
      }
    }, 100);
  };

  const enterMatrix = () => {
    setTrollMode('matrix');
    addConsoleLine('> ENTERING THE MATRIX...');
    
    setTimeout(() => {
      Alert.alert(
        '🕶️ WELCOME TO THE MATRIX',
        'Bạn đã chọn viên thuốc đỏ!\n\nNhưng đây chỉ là app React Native 🤷‍♂️',
        [{ text: 'Exit Matrix', onPress: () => setTrollMode('idle') }]
      );
    }, 3000);
  };

  const causeError = () => {
    setTrollMode('error');
    addConsoleLine('> ❌ CRITICAL ERROR DETECTED!');
    addConsoleLine('> SYSTEM MELTDOWN IN 3...');
    
    setTimeout(() => addConsoleLine('> 2...'), 1000);
    setTimeout(() => addConsoleLine('> 1...'), 2000);
    setTimeout(() => {
      Alert.alert(
        '💥 SYSTEM CRASHED!',
        'Windows has encountered a problem and needs to restart.\n\nJK! ',
        [{ text: 'Restart', onPress: () => setTrollMode('idle') }]
      );
    }, 3000);
  };

  const deleteSystem32 = () => {
    Alert.alert(
      '⚠️ WARNING!',
      'Bạn có chắc muốn xóa System32?\n\n',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'XÓA',
          style: 'destructive',
          onPress: () => {
            addConsoleLine('> DELETING C:\\Windows\\System32...');
            addConsoleLine('> ERROR: ACCESS DENIED');
            addConsoleLine('> NICE TRY! 😎');
           
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Hack Slink" showBack={true} />
      
      <View style={styles.content}>
        <View style={styles.console}>
          <View style={styles.consoleHeader}>
            <Text style={styles.consoleTitle}>
              {trollMode === 'matrix' && blinkState ? '█ MATRIX MODE █' : '═══ HACK_SLINK.EXE ═══'}
            </Text>
          </View>

          <View style={[
            styles.consoleBody,
            trollMode === 'matrix' && styles.matrixBg,
            trollMode === 'error' && styles.errorBg,
          ]}>
            {trollMode === 'matrix' ? (
              <Text style={styles.matrixText}>
                {matrixChars.join(' ')}
              </Text>
            ) : (
              consoleLines.map((line, index) => (
                <Text key={index} style={styles.consoleLine}>
                  {line}
                  {index === consoleLines.length - 1 && blinkState && (
                    <Text style={styles.cursor}>█</Text>
                  )}
                </Text>
              ))
            )}

            {trollMode === 'hacking' && (
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${hackProgress}%` }]} />
                <Text style={styles.progressText}>{Math.floor(hackProgress)}%</Text>
              </View>
            )}

            {trollMode === 'virus' && (
              <Text style={styles.virusCounter}>
                🦠 VIRUS COUNT: {virusCount.toLocaleString()}
              </Text>
            )}
          </View>

          <View style={styles.consoleFooter}>
            <Text style={styles.footerText}>
              {trollMode === 'idle' ? '[ READY ]' : `[ ${trollMode.toUpperCase()} ]`}
            </Text>
          </View>
        </View>

        <View style={styles.buttonGrid}>
          <TouchableOpacity 
            style={[styles.trollButton, trollMode !== 'idle' && styles.buttonDisabled]}
            onPress={startFakeHack}
            disabled={trollMode !== 'idle'}
          >
            <Text style={styles.buttonText}>👨‍💻 HACK FBI</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.trollButton, trollMode !== 'idle' && styles.buttonDisabled]}
            onPress={unleashVirus}
            disabled={trollMode !== 'idle'}
          >
            <Text style={styles.buttonText}>🦠 VIRUS</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.trollButton, trollMode !== 'idle' && styles.buttonDisabled]}
            onPress={enterMatrix}
            disabled={trollMode !== 'idle'}
          >
            <Text style={styles.buttonText}>🕶️ MATRIX</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.trollButton, trollMode !== 'idle' && styles.buttonDisabled]}
            onPress={causeError}
            disabled={trollMode !== 'idle'}
          >
            <Text style={styles.buttonText}>💥 BSOD</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.trollButton, styles.dangerButton]}
            onPress={deleteSystem32}
          >
            <Text style={styles.buttonText}>🗑️ DEL SYS32</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.trollButton, trollMode === 'idle' && styles.buttonDisabled]}
            onPress={() => {
              setTrollMode('idle');
              setConsoleLines(['> SYSTEM READY...', '> AWAITING COMMAND...']);
              setHackProgress(0);
              setVirusCount(0);
            }}
            disabled={trollMode === 'idle'}
          >
            <Text style={styles.buttonText}>🔄 RESET</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.warning}>
          
        </View>
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
  },
  console: {
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    marginBottom: 20,
  },
  consoleHeader: {
    backgroundColor: RetroColors.terminal.secondary,
    borderBottomWidth: 2,
    borderBottomColor: RetroColors.terminal.primary,
    padding: 10,
  },
  consoleTitle: {
    color: RetroColors.terminal.textDark,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  consoleBody: {
    minHeight: 200,
    maxHeight: 300,
    padding: 15,
    backgroundColor: RetroColors.terminal.bg,
  },
  matrixBg: {
    backgroundColor: '#001100',
  },
  errorBg: {
    backgroundColor: '#000088',
  },
  consoleLine: {
    color: RetroColors.terminal.text,
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 5,
  },
  matrixText: {
    color: '#00FF00',
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    lineHeight: 20,
  },
  cursor: {
    color: RetroColors.terminal.primary,
  },
  consoleFooter: {
    backgroundColor: RetroColors.terminal.secondary,
    borderTopWidth: 2,
    borderTopColor: RetroColors.terminal.primary,
    padding: 8,
  },
  footerText: {
    color: RetroColors.terminal.textDark,
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  progressBar: {
    height: 30,
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 2,
    borderColor: RetroColors.terminal.primary,
    marginTop: 10,
    position: 'relative',
  },
  progressFill: {
    height: '100%',
    backgroundColor: RetroColors.terminal.secondary,
  },
  progressText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    lineHeight: 26,
    color: RetroColors.terminal.textDark,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  virusCounter: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  trollButton: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 3,
    borderColor: RetroColors.terminal.primary,
    padding: 15,
  },
  dangerButton: {
    borderColor: '#FF0000',
  },
  buttonDisabled: {
    opacity: 0.3,
  },
  buttonText: {
    color: RetroColors.terminal.text,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  warning: {
    backgroundColor: RetroColors.terminal.bgLight,
    borderWidth: 2,
    borderColor: '#FFAA00',
    padding: 10,
  },
  warningText: {
    color: '#FFAA00',
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
});
