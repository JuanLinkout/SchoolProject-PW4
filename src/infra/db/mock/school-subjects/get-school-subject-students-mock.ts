import { IGetSchoolSubjectStudentsRepository } from "../../../../data/types/school-subject/get-school-subject-students-repository";
import { ISchoolSubject } from "../../../../domain/entities/school-subject";

export class GetSchoolSubjectStudentsRepositoryMock
  implements IGetSchoolSubjectStudentsRepository
{
  async get(id: string): Promise<ISchoolSubject> {
    return {
      id: "12441",
      name: "PW4",
      students: [{ id: "1241", name: "Juan Rossi" }],
    };
  }
}
