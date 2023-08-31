import { ISchoolSubject } from "../../entities/school-subject";

export interface IGetSchoolSubjectStudentsUseCase {
  get: (id: string) => Promise<ISchoolSubject>;
}
