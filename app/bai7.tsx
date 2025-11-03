import { CustomHeader } from '@/components/custom-header';
import { RetroColors } from '@/constants/retro-theme';
import { useState } from 'react';
import { Alert, FlatList, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Task {
  id: string;
  text: string;
}

export default function TodoListScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim() === '') {
      Alert.alert('ERROR', 'VUI LÒNG NHẬP CÔNG VIỆC!');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      text: task,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  const deleteTask = (id: string) => {
    Alert.alert(
      'XÁC NHẬN',
      'XÓA CÔNG VIỆC NÀY?',
      [
        { text: 'HỦY', style: 'cancel' },
        {
          text: 'XÓA',
          style: 'destructive',
          onPress: () => setTasks(tasks.filter((item) => item.id !== id)),
        },
      ]
    );
  };

  const renderTask = ({ item, index }: { item: Task; index: number }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskNumber}>[{index + 1}]</Text>
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteButtonText}>[X]</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader title="Danh Sách Công Việc" showBack={true} />
      
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>═══ TODO.EXE ═══</Text>
          </View>

          <View style={styles.cardBody}>
            <Text style={styles.label}>► NHẬP CÔNG VIỆC:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="..."
                placeholderTextColor={RetroColors.terminal.dark}
                value={task}
                onChangeText={setTask}
                onSubmitEditing={addTask}
              />
              <TouchableOpacity style={styles.addButton} onPress={addTask}>
                <Text style={styles.addButtonText}>[+]</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            {tasks.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>┌──────────────────┐</Text>
                <Text style={styles.emptyText}>│  NO TASKS FOUND  │</Text>
                <Text style={styles.emptyText}>└──────────────────┘</Text>
              </View>
            ) : (
              <FlatList
                data={tasks}
                renderItem={renderTask}
                keyExtractor={(item) => item.id}
                style={styles.list}
                contentContainerStyle={styles.listContent}
              />
            )}
          </View>

          <View style={styles.cardFooter}>
            <Text style={styles.footerText}>TOTAL: {tasks.length} TASK(S)</Text>
          </View>
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
  card: {
    flex: 1,
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
    flex: 1,
    padding: 20,
  },
  cardFooter: {
    backgroundColor: RetroColors.terminal.secondary,
    borderTopWidth: 2,
    borderTopColor: RetroColors.terminal.primary,
    padding: 10,
  },
  footerText: {
    color: RetroColors.terminal.textDark,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: RetroColors.terminal.primary,
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: RetroColors.terminal.primary,
    backgroundColor: RetroColors.terminal.bg,
    padding: 12,
    fontSize: 14,
    color: RetroColors.terminal.text,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  addButton: {
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 2,
    borderColor: RetroColors.terminal.primary,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  addButtonText: {
    color: RetroColors.terminal.text,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  separator: {
    height: 2,
    backgroundColor: RetroColors.terminal.dark,
    marginVertical: 15,
  },
  list: {
    flex: 1,
  },
  listContent: {
    gap: 5,
  },
  taskItem: {
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 2,
    borderColor: RetroColors.terminal.primary,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskNumber: {
    color: RetroColors.terminal.primary,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginRight: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 14,
    color: RetroColors.terminal.text,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  deleteButton: {
    marginLeft: 10,
  },
  deleteButtonText: {
    color: '#FF0000',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: RetroColors.terminal.dark,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});
