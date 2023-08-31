import { GetSchoolSubjectStudentsImplementation } from "../../../data/use-cases/school-subjects/get-school-subject-students-implementantion";
import { GetSchoolSubjectStudentsRepositoryMock } from "../../../infra/db/mock/school-subjects/get-school-subject-students-mock";
import { GetSchoolSubjectStudentsController } from "../../../presentation/controllers/school-subject/get-school-subject-students-controller";
import { IController } from "../../../presentation/types/controller";

export function makeGetSchoolSubjectStudentsController(): IController {
  const getSchoolSubjectStudentsRepository =
    new GetSchoolSubjectStudentsRepositoryMock();

  const getSchoolSubjectStudentsUseCase =
    new GetSchoolSubjectStudentsImplementation(
      getSchoolSubjectStudentsRepository
    );

  const getSchoolSubjectStudentsController =
    new GetSchoolSubjectStudentsController(getSchoolSubjectStudentsUseCase);

  return getSchoolSubjectStudentsController;
}
