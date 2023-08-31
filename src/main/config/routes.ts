import { Express, Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeStudentController } from "../factories/student/get-student-controller";
import { makeGetClassController } from "../factories/classes/get-class-controller";
import { makeGetSchoolSubjectStudentsController } from "../factories/school-subjects/get-school-subjects-students-controller";
import { makeStudentSchoolSubjectsController } from "../factories/student/get-student-school-subjects-controller";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use(router);

  // Students
  router.get("/students", adaptRoute(makeStudentController()));
  router.get(
    "/students/:studentId/school-subjects",
    adaptRoute(makeStudentSchoolSubjectsController())
  );

  // Classes
  router.get(
    "/classes/:classId/students",
    adaptRoute(makeGetClassController())
  );

  // SchoolSubjects
  router.get(
    "/school-subjects/:schoolSubjectId/students",
    adaptRoute(makeGetSchoolSubjectStudentsController())
  );
};
