import { IGetStudentSchoolSubjectsUseCase } from "../../../domain/use-cases/students/get-student-school-subjects";
import { internalServerError, ok } from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";

export class GetStudentSchoolSubjectsController implements IController {
  private getStudentSchoolSubjectsUseCase: IGetStudentSchoolSubjectsUseCase;

  constructor(
    getStudentSchoolSubjectsUseCase: IGetStudentSchoolSubjectsUseCase
  ) {
    this.getStudentSchoolSubjectsUseCase = getStudentSchoolSubjectsUseCase;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const id = req.pathParams.studentId;
      const response = await this.getStudentSchoolSubjectsUseCase.get(id);
      return ok(response);
    } catch (e) {
      return internalServerError();
    }
  }
}
