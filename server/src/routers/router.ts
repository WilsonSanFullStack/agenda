import { Router } from "express";
const router = Router();

//importacion de rutas
import routerPing from "./ping";
import routerUser from './routerUser'

// creacion de la url base
const root = "/api/agenda";
const auth = "/auth";
//asignacion de la url base a las rutas
const path = {
  ping: `${root}/ping`,
  user: `${root}/user`
};
//carga de router con las url base
router.use(path.ping, routerPing);
router.use(path.user, routerUser)

export default router