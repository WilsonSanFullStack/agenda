import { Router, Request, Response } from "express";
const router = Router();
import { getClientes } from "../controller/clientes";

router.get("/", async (req: Request, res: Response) => {
  const clientes = await getClientes()
  console.log(clientes)
  res.status(200).json(clientes);
});

export default router;