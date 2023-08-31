import { IGetStudentsRepository } from "../../../../data/types/students/get-students-repository";
import { IStudent } from "../../../../domain/entities/student";

export class GetStudentsMock implements IGetStudentsRepository {
  async get(): Promise<IStudent[]> {
    return [
      {
        id: "1",
        name: "Juan Rossi",
      },
      {
        id: "2",
        name: "Gustavo Loones",
      },
    ];
  }
}
