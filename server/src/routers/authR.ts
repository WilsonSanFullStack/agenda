import { Router, Request, Response } from "express";
const router = Router();
import { logging } from "../controller/authC";

router.post("/", async (req: Request, res: Response) => {
  try {
    const login = req.body;
    const response = await logging(login);
    if ("token" in response) {
      const { token, payload } = response;
      res.cookie("jwt", token, {
        httpOnly: true, // Asegura que la cookie no sea accesible por JavaScript del lado del cliente
        secure: true, // Solo se envía en HTTPS en producción
        sameSite: "none"
      });
      return res
        .status(200)
        .json({ message: "Credenciales Correctas", user: payload });
    } else if ("message" in response) {
      return res.status(404).json(response.message);
    } else {
      return res.status(500).json(response.error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default router;
