import { Router } from "express";
// import githubRouter from "./github.routes";
import githubRouter from "./github.routes";

const routes = Router();

routes.use("/api/cards/", githubRouter);
routes.use("/api/cards/", githubRouter);

export default routes;
