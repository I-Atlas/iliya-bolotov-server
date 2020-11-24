import { Router } from "express";
import cardRouter from "./card.routes";
import emailRouter from "./email.routes";
import helloRouter from "./hello.routes";

const routes = Router();

routes.use("/api/cards/", cardRouter);
routes.use("/api/email/", emailRouter);
routes.use("/", helloRouter);

export default routes;
