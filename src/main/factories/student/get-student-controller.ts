import { GetStudentsImplementation } from "../../../data/use-cases/students/get-students-implementation";
import { GetStudentsMock } from "../../../infra/db/mock/students/get-students-mock";
import { GetStudentsController } from "../../../presentation/controllers/students/get-students-controller";
import { IController } from "../../../presentation/types/controller";

export function makeStudentController(): IController {
  const getStudentsRepository = new GetStudentsMock();
  const getStudentUseCase = new GetStudentsImplementation(
    getStudentsRepository
  );
  const getStudentsController = new GetStudentsController(getStudentUseCase);
  return getStudentsController;
}
