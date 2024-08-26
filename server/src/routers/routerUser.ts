import { Router, Request, Response } from "express";
const router = Router();
import { getUser, postUser } from "../controller/user";

router.post('/', async (req: Request, res: Response) => {
  const user = req.body
  const response = await postUser(user)
  console.log(response)
  res.status(200).json(response)
})

router.get("/", async (req: Request, res: Response) => {
  const user = await getUser()
  console.log(user)
  res.status(200).json(user);
});

export default router;