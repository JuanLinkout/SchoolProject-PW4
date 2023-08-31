import { IStudent } from "./student";

export interface ISchoolSubject {
  id: string;
  name: string;
  students: IStudent[];
}
