import { IGetStudentSchoolSubjectsRepository } from "../../../../data/types/students/get-student-school-subjects-repository";
import { IStudentSchoolSubject } from "../../../../domain/entities/student-school-subject";

export class GetStudentSchoolSubjectsRepositoryMock
  implements IGetStudentSchoolSubjectsRepository
{
  async get(id: string): Promise<IStudentSchoolSubject> {
    return {
      studentId: "123",
      studentName: "Juan Rossi",
      schoolSubjects: [{ id: "1234", name: "PW4" }],
    };
  }
}
