import { GetClassImplementation } from "../../../data/use-cases/classes/get-class-implementation";
import { GetClassRepositoryMock } from "../../../infra/db/mock/classes/get-class-mock";
import { GetClassController } from "../../../presentation/controllers/classes/get-class-controller";
import { IController } from "../../../presentation/types/controller";

export function makeGetClassController(): IController {
  const getClassRepository = new GetClassRepositoryMock();
  const getClassUseCase = new GetClassImplementation(getClassRepository);
  const getClassController = new GetClassController(getClassUseCase);
  return getClassController;
}
