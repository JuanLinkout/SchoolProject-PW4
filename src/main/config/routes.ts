import { Express, Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeStudentController } from "../factories/student/get-student-controller";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use(router);

  // Students
  router.get("/students", adaptRoute(makeStudentController()));
};
