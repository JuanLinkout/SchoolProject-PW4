import { IStudent } from "../../entities/student";

export interface IGetStudentsUseCase {
  get: () => Promise<IStudent[]>;
}
