import { IStudentSchoolSubject } from "../../entities/student-school-subject";

export interface IGetStudentSchoolSubjectsUseCase {
  get: (id: string) => Promise<IStudentSchoolSubject>;
}
