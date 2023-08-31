import { IStudentSchoolSubject } from "../../../domain/entities/student-school-subject";

export interface IGetStudentSchoolSubjectsRepository {
  get: (id: string) => Promise<IStudentSchoolSubject>;
}
