import { ISchoolSubject } from "../../../domain/entities/school-subject";
import { IGetSchoolSubjectStudentsUseCase } from "../../../domain/use-cases/school-subjects/get-school-subject-students-use-case";
import { IGetSchoolSubjectStudentsRepository } from "../../types/school-subject/get-school-subject-students-repository";

export class GetSchoolSubjectStudentsImplementation
  implements IGetSchoolSubjectStudentsUseCase
{
  private getSchoolSubjectStudentsRepository: IGetSchoolSubjectStudentsRepository;

  constructor(
    getSchoolSubjectStudentsRepository: IGetSchoolSubjectStudentsRepository
  ) {
    this.getSchoolSubjectStudentsRepository =
      getSchoolSubjectStudentsRepository;
  }

  async get(id: string): Promise<ISchoolSubject> {
    const response = await this.getSchoolSubjectStudentsRepository.get(id);
    return response;
  }
}
