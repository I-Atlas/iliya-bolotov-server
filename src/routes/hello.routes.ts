import { Router } from "express";

const helloRouter = Router();

helloRouter.get("/", (_, res) => {
  res.send("Hello, World!");
});

export default helloRouter;
