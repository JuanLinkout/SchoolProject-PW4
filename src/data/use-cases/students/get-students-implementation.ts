import { IStudent } from "../../../domain/entities/student";
import { IGetStudentUseCase } from "../../../domain/use-cases/students/get-student-use-case";
import { IGetStudentsRepository } from "../../types/students/get-students-repository";

export class GetStudentsImplementation implements IGetStudentUseCase {
  private getStudentRepository: IGetStudentsRepository;

  constructor(getStudentRepository: IGetStudentsRepository) {
    this.getStudentRepository = getStudentRepository;
  }

  async get(): Promise<IStudent[]> {
    const students = await this.getStudentRepository.get();
    return students;
  }
}
