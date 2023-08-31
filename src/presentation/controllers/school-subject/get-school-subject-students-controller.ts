import { IGetSchoolSubjectStudentsUseCase } from "../../../domain/use-cases/school-subjects/get-school-subject-students-use-case";
import { internalServerError, ok } from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";

export class GetSchoolSubjectStudentsController implements IController {
  private getSchoolSubjectStudentsUseCase: IGetSchoolSubjectStudentsUseCase;

  constructor(
    getSchoolSubjectStudentsUseCase: IGetSchoolSubjectStudentsUseCase
  ) {
    this.getSchoolSubjectStudentsUseCase = getSchoolSubjectStudentsUseCase;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const id = req.pathParams.schoolSubjectId;
      const response = await this.getSchoolSubjectStudentsUseCase.get(id);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
