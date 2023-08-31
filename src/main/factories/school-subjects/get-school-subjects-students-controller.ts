import { GetSchoolSubjectStudentsImplementation } from "../../../data/use-cases/school-subjects/get-school-subject-students-implementantion";
import { GetSchoolSubjectStudentsRepositoryMock } from "../../../infra/db/mock/school-subjects/get-school-subject-students-mock";
import { GetSchoolSubjectStudentsController } from "../../../presentation/controllers/school-subject/get-school-subject-students-controller";
import { IController } from "../../../presentation/types/controller";

export function makeGetSchoolSubjectStudentsController(): IController {
  const repository = new GetSchoolSubjectStudentsRepositoryMock();
  const usecase = new GetSchoolSubjectStudentsImplementation(repository);
  const controller = new GetSchoolSubjectStudentsController(usecase);
  return controller;
}
