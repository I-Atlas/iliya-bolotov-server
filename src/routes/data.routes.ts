import { Router } from "express";
import Github from "../controllers/github.controller";

const githubRouter = Router();

githubRouter.get("/github", Github.getRepos);

export default githubRouter;
