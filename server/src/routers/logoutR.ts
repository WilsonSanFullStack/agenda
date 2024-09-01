import { Router, Request, Response } from "express";
const router = Router();
import { verifyToken } from "../jwt/jwt";

router.post("/", verifyToken, async (req: Request, res: Response) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true, // Asegura que la cookie no sea accesible por JavaScript del lado del cliente
      secure: true, // Solo se envía en HTTPS en producción
      sameSite: "none",
    });
    return res.status(201).json({ message: "Token eliminado con exito" });
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default router;
