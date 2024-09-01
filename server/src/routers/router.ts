import { Router } from "express";
const router = Router();

//importacion de rutas
import pingR from "./pingR";
import userR from "./userR";
import clientesR from "./clientesR";
import authR from "./authR";
import logoutR from "./logoutR";

// creacion de la url base
const root = "/api/agenda";
const auth = "/auth";
//asignacion de la url base a las rutas
const path = {
  ping: `${root}/ping`,
  clientes: `${root}${auth}/clientes`,
  user: `${root}${auth}/user`,
  auth: `${root}${auth}`,
  sesion: `${root}${auth}/logout`,
};
//carga de router con las url base
router.use(path.ping, pingR);
router.use(path.clientes, clientesR);
router.use(path.user, userR);
router.use(path.auth, authR);
router.use(path.sesion, logoutR);

export default router;
