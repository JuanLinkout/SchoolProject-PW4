import { IGetClassRepository } from "../../../../data/types/classes/get-class-repository";
import { IClass } from "../../../../domain/entities/class";

export class GetClassRepositoryMock implements IGetClassRepository {
  async get(classId: string): Promise<IClass> {
    return { id: "123", students: [{ id: "1234", name: "Juan Rossi" }] };
  }
}
