import { Router } from "express";
import Github from "../controllers/github.controller";

const githubRouter = Router();

githubRouter.post("/create", Github.createData);
githubRouter.get("/", Github.getRepos);

export default githubRouter;
