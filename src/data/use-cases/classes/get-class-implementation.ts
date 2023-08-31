import { IClass } from "../../../domain/entities/class";
import { IGetClassUseCase } from "../../../domain/use-cases/classes/get-class-use-case";
import { IGetClassRepository } from "../../types/classes/get-class-repository";

export class GetClassImplementation implements IGetClassUseCase {
  private getStudentRepository: IGetClassRepository;

  constructor(getStudentRepository: IGetClassRepository) {
    this.getStudentRepository = getStudentRepository;
  }

  async get(classId: string): Promise<IClass> {
    const classResponse = await this.getStudentRepository.get(classId);
    return classResponse;
  }
}
