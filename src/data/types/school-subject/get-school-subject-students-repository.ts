import { ISchoolSubject } from "../../../domain/entities/school-subject";

export interface IGetSchoolSubjectStudentsRepository {
  get: (id: string) => Promise<ISchoolSubject>;
}
