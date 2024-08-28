import { Router, Request, Response } from "express";
const router = Router();
import { getClientes } from "../controller/clientesC";

router.get("/", async (req: Request, res: Response) => {
  try {
    const clientes = await getClientes()
  res.status(200).json(clientes);
  } catch (error) {
    
  }
  
});

export default router;