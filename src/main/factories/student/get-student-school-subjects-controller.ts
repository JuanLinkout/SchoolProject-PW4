import { GetStudentSchoolSubjectsImplementation } from "../../../data/use-cases/students/get-student-school-subjects-implementation";
import { GetStudentsImplementation } from "../../../data/use-cases/students/get-students-implementation";
import { GetStudentSchoolSubjectsRepositoryMock } from "../../../infra/db/mock/students/get-student-school-subjects-mock";
import { GetStudentsMock } from "../../../infra/db/mock/students/get-students-mock";
import { GetStudentSchoolSubjectsController } from "../../../presentation/controllers/students/get-student-school-subjects-controller";
import { GetStudentsController } from "../../../presentation/controllers/students/get-students-controller";
import { IController } from "../../../presentation/types/controller";

export function makeStudentSchoolSubjectsController(): IController {
  const repository = new GetStudentSchoolSubjectsRepositoryMock();
  const usecase = new GetStudentSchoolSubjectsImplementation(repository);
  const controller = new GetStudentSchoolSubjectsController(usecase);
  return controller;
}
