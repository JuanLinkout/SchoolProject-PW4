import { IGetStudentsUseCase } from "../../../domain/use-cases/students/get-student-use-case";
import { internalServerError, ok } from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";

export class GetStudentsController implements IController {
  private getStudentUseCase: IGetStudentsUseCase;

  constructor(getStudentUseCase: IGetStudentsUseCase) {
    this.getStudentUseCase = getStudentUseCase;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const students = await this.getStudentUseCase.get();
      return ok(students);
    } catch (e) {
      return internalServerError();
    }
  }
}
