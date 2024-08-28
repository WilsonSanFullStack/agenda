import { Router, Request, Response } from "express";
const router = Router();
import { getUser, postUser } from "../controller/userC";

router.post("/", async (req: Request, res: Response) => {
  try {
    const user = req.body;
    if (user.nombre && user.apellido && user.userName && user.password && user.admin &&  user.email) { 
      const response = await postUser(user);
      res.status(200).json(response);
    } else {
      res.status(404).json({error: 'Error datos insuficientes'})
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const user = await getUser();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error)
  }
});

export default router;
