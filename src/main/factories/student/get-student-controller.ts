import { GetStudentsImplementation } from "../../../data/use-cases/students/get-students-implementation";
import { GetStudentsMock } from "../../../infra/db/mock/students/get-students-mock";
import { GetStudentsController } from "../../../presentation/controllers/students/get-students-controller";
import { IController } from "../../../presentation/types/controller";

export function makeStudentController(): IController {
  const repository = new GetStudentsMock();
  const usecase = new GetStudentsImplementation(repository);
  const controller = new GetStudentsController(usecase);
  return controller;
}
