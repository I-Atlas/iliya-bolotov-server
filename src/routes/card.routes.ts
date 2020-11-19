import { Router } from "express";
import Card from "../controllers/card.controller";

const githubRouter = Router();

githubRouter.post("/create", Card.createData);
githubRouter.post("/update", Card.updateData);
githubRouter.post("/delete", Card.deleteData);
githubRouter.get("/", Card.getData);

export default githubRouter;
