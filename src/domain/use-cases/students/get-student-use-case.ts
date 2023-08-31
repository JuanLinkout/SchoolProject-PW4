import { IStudent } from "../../entities/student";

export interface IGetStudentUseCase {
  get: () => Promise<IStudent[]>;
}
