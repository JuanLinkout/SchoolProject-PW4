import { Express, Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeStudentController } from "../factories/student/get-student-controller";
import { makeGetClassController } from "../factories/classes/get-class-controller";
import { makeGetSchoolSubjectStudentsController } from "../factories/school-subjects/get-school-subjects-students-controller";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use(router);

  // Students
  router.get("/students", adaptRoute(makeStudentController()));

  // Classes
  router.get(
    "/classes/:classId/students",
    adaptRoute(makeGetClassController())
  );

  // SchoolSubjects
  router.get(
    "/schoolSubjects/:schoolSubjectId/students",
    adaptRoute(makeGetSchoolSubjectStudentsController())
  );
};
