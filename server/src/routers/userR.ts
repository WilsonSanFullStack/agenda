import { Router, Request, Response } from "express";
const router = Router();
import { getUser, postUser } from "../controller/userC";
import { verifyToken } from "../jwt/jwt";

router.post("/",  async (req: Request, res: Response) => {
  try {
    const user = req.body;
    console.log(user);
    if (
      user.nombre &&
      user.apellido &&
      user.userName &&
      user.email &&
      user.password &&
      user.confirmarPassword
    ) {
      const response = await postUser(user);
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Error datos insuficientes" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const user = await getUser();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
