import { Router } from "express";
import cardRouter from "./card.routes";
import emailRouter from "./email.routes";

const routes = Router();

routes.use("/api/cards/", cardRouter);
routes.use("/api/email/", emailRouter);

export default routes;
