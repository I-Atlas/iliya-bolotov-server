import { Router } from "express";
import Email from "../controllers/email.controller";

const emailRouter = Router();

emailRouter.get("/", Email.getData);

export default emailRouter;
