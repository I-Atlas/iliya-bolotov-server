import { Router } from "express";
import Cards from "../controllers/github.controller";

const githubRouter = Router();

githubRouter.post("/create", Cards.createData);
githubRouter.post("/update", Cards.updateData);
githubRouter.post("/delete", Cards.deleteData);
githubRouter.get("/", Cards.getData);

export default githubRouter;
