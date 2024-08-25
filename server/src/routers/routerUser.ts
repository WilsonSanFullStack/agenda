import { Router, Request, Response } from "express";
const router = Router();
import { getUser } from "../controller/user";

router.get("/", async (req: Request, res: Response) => {
  const user = await getUser()
  console.log(user)
  res.status(200).json(user);
});

export default router;