import { IStudent } from "../../../domain/entities/student";
import { IStudentSchoolSubject } from "../../../domain/entities/student-school-subject";
import { IGetStudentSchoolSubjectsUseCase } from "../../../domain/use-cases/students/get-student-school-subjects";
import { IGetStudentSchoolSubjectsRepository } from "../../types/students/get-student-school-subjects-repository";

export class GetStudentSchoolSubjectsImplementation
  implements IGetStudentSchoolSubjectsUseCase
{
  private getStudentSchoolSubjectsRepository: IGetStudentSchoolSubjectsRepository;

  constructor(
    getStudentSchoolSubjectsRepository: IGetStudentSchoolSubjectsRepository
  ) {
    this.getStudentSchoolSubjectsRepository =
      getStudentSchoolSubjectsRepository;
  }

  async get(id: string): Promise<IStudentSchoolSubject> {
    const response = await this.getStudentSchoolSubjectsRepository.get(id);
    return response;
  }
}
