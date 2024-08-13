import { Router } from "express";
const router = Router();

//importacion de rutas
import routerPing from "./ping";

// creacion de la url base
const root = "/api/agenda";
const auth = "/auth";
//asignacion de la url base a las rutas
const path = {
  ping: `${root}/ping`,
};
//carga de router con las url base
router.use(path.ping, routerPing);

export default router