import { IStudent } from "./student";

export interface IClass {
  id: string;
  students: IStudent[];
}
