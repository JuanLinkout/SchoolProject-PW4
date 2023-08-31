import { IClass } from "../../../domain/entities/class";

export interface IGetClassRepository {
  get: (classId: string) => Promise<IClass>;
}
