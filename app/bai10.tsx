import { CustomHeader } from '@/components/custom-header';
import { RetroColors } from '@/constants/retro-theme';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Student {
  id: string;
  name: string;
  age: number;
  major: string;
  email: string;
}

const initialStudents: Student[] = [
  { id: '1', name: 'Nguyễn Văn A', age: 20, major: 'Công nghệ thông tin', email: 'nva@example.com' },
  { id: '2', name: 'Trần Thị B', age: 21, major: 'Kế toán', email: 'ttb@example.com' },
  { id: '3', name: 'Lê Văn C', age: 22, major: 'Quản trị kinh doanh', email: 'lvc@example.com' },
  { id: '4', name: 'Phạm Thị D', age: 20, major: 'Marketing', email: 'ptd@example.com' },
];

export default function StudentListScreen() {
  const [students] = useState<Student[]>(initialStudents);
  const router = useRouter();

  const viewStudentDetail = (student: Student) => {
    router.push({
      pathname: '/student-detail',
      params: {
        id: student.id,
        name: student.name,
        age: student.age.toString(),
        major: student.major,
        email: student.email,
      },
    });
  };

  const addNewStudent = () => {
    router.push('/student-add');
  };

  const renderStudent = ({ item, index }: { item: Student; index: number }) => (
    <TouchableOpacity
      style={styles.studentCard}
      onPress={() => viewStudentDetail(item)}
      activeOpacity={0.8}
    >
      <Text style={styles.studentNumber}>[{index + 1}]</Text>
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>► {item.name.toUpperCase()}</Text>
        <Text style={styles.studentDetail}>  MAJOR: {item.major}</Text>
        <Text style={styles.studentDetail}>  AGE: {item.age}</Text>
      </View>
      <Text style={styles.arrow}>[→]</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomHeader title="Danh Sách Sinh Viên" showBack={true} />
      
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>═══ STUDENT.DB ═══</Text>
          </View>

          <TouchableOpacity style={styles.addButton} onPress={addNewStudent}>
            <Text style={styles.addButtonText}>[ + THÊM SINH VIÊN ]</Text>
          </TouchableOpacity>

          <FlatList
            data={students}
            renderItem={renderStudent}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
          />

          <View style={styles.cardFooter}>
            <Text style={styles.footerText}>TOTAL: {students.length} STUDENT(S)</Text>
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
  addButton: {
    backgroundColor: RetroColors.terminal.bg,
    borderBottomWidth: 2,
    borderBottomColor: RetroColors.terminal.primary,
    padding: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: RetroColors.terminal.text,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  listContent: {
    padding: 15,
    gap: 10,
  },
  studentCard: {
    backgroundColor: RetroColors.terminal.bg,
    borderWidth: 2,
    borderColor: RetroColors.terminal.primary,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  studentNumber: {
    color: RetroColors.terminal.primary,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginRight: 10,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: RetroColors.terminal.text,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 3,
  },
  studentDetail: {
    fontSize: 12,
    color: RetroColors.terminal.dark,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  arrow: {
    fontSize: 14,
    color: RetroColors.terminal.primary,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginLeft: 10,
  },
});
