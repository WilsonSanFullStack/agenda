// importacion de herramientas
import bcrypt from "bcryptjs";
//importacion de modelos
import db from "../db";
//importacion de funciones
import { generateToken } from "../jwt/jwt";
// creacion de type para login
type LOGIN = { userName: string; password: string };
// funcion logging
export const logging = async (login: LOGIN) => {
  try {
    // consulta a la db
    const userDocRef = db.collection("usuarios").doc(`${login.userName}`);
    const verifyUser = await userDocRef.get();

    // pasandon los dataValues a user
    const user = verifyUser?.data();
    // verificamos si existe user si no existe retornamos un error caso contrario comparamos la contraseña
    if (!user) {
      return {
        message: "Credenciales incorrectas Nick no encontrado.",
      };
    } else {
      const passwordMatch = await bcrypt.compare(login.password, user.password);
      // verificamos si la contraseña es correcta si no lo es retornamos error
      if (!passwordMatch) {
        return { message: "Credenciales incorrectas." };
      } else {
        // creacion del payload para el token
        const payload = {
          nombre: user.nombre,
          apellido: user.apellido,
          userName: user.userName,
          email: user.email,
          admin: user.admin,
        };
        //generamos el token
        const token = generateToken(payload);
        //retornamos el token
        return token;
      }
    }
  } catch (error) {
    // error del servidor
    return { error: `Error en el servidor ${error}` };
  }
};
