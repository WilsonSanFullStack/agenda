import { Router, Request, Response } from "express";
const router = Router();
import { getClientes } from "../controller/clientesC";
import { verifyToken } from "../jwt/jwt";

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const clientes = await getClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
