import { IStudent } from "../../../domain/entities/student";

export interface IGetStudentsRepository {
  get: () => Promise<IStudent[]>;
}
