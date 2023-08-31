export interface IStudentSchoolSubject {
  studentId: string;
  studentName: string;

  schoolSubjects: { id: string; name: string }[];
}
