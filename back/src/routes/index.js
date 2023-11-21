import { Router } from "express";
import userRouter from "./usuarios.routes.js";
import adminRouter from "./admin.routes.js";
import ticketRouter from "./tickets.routes.js";

const routes = (app) => {
  let router = Router();
  app.use(router);

  router.use(userRouter);
  router.use(adminRouter);
  router.use(ticketRouter);
};

export default routes;
