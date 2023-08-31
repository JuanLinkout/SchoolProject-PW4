import { IClass } from "../../entities/class";

export interface IGetClassUseCase {
  get: (classId: string) => Promise<IClass>;
}
