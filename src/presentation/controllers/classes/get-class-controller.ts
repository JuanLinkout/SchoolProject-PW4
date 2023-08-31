import { IGetClassUseCase } from "../../../domain/use-cases/classes/get-class-use-case";
import {
  internalServerError,
  missingParamError,
  ok,
} from "../../helpers/http-helper";
import { IController } from "../../types/controller";
import { IHttpRequest, IHttpResponse } from "../../types/http";

export class GetClassController implements IController {
  private getClass: IGetClassUseCase;

  constructor(getClass: IGetClassUseCase) {
    this.getClass = getClass;
  }

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    try {
      const classId = req.pathParams.classId;
      if (!classId) {
        throw missingParamError("id");
      }

      const classResponse = await this.getClass.get(classId);
      return ok(classResponse);
    } catch (e) {
      return internalServerError();
    }
  }
}
