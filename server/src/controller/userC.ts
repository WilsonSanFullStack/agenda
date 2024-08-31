import { Timestamp } from "firebase-admin/firestore";
import db from "../db";
import bcrypt from "bcryptjs";


export const getUser = async () => {
  try {
    const user = await db.collection("usuarios").get();
   user.forEach((doc) => {console.log(doc.data())})
    let res:User[] = [];
    user.forEach((doc) => {
      const data = doc.data() as User
      res.push(data);
    });
    return res;
  } catch (error) {
    console.log("error", error);
    return {error: `Error en el servisor ${error}`}
  }
};

export interface User {
  admin: boolean;
  apellido: string;
  email: string;
  id: number;
  nombre: string;
  password: string;
  registro: {
    _seconds: number;
    _nanoseconds: number;
  };
  userName: string;
}
export const postUser = async (user: User) => {
  try {
    console.log('first')
    if (
      user?.email === "harveysanch@gmail.com" &&
      user?.nombre?.toLowerCase() === "wilson"
    ) {
      user.admin = true;
    }
    // verifica si un usuario ya existe con ese correo retorna error en caso contrario continua la funcion
    const userDocRef = db.collection("usuarios").doc(`${user.userName}`);
    const verifyUser = await userDocRef.get();
    if (verifyUser.exists) {
      return { error: "El Nick ya esta registrado" };
    } else {
      const password = user.password;
      const saltRounds = 10;
      // verificamos si tiene contraseña y hacemos un hashed
      if (password) {
        const hashedPassword = await new Promise<string>((resolve, reject) => {
          bcrypt.hash(
            password,
            saltRounds,
            (err: Error | null, hash: string) => {
              if (err) {
                reject(err);
              } else {
                resolve(hash);
              }
            }
          );
        });
        // cambiamos el valor de la contraseña por el hashed
        user.password = hashedPassword;
      }
      const response = db.collection("usuarios").doc(`${user.userName}`);
      await response.set({
        admin: user.admin,
        apellido: user.apellido,
        email: user.email,
        nombre: user.nombre,
        password: user.password,
        userName: user.userName,
        registro: Timestamp.now()
      });
      if (response) {
        const respon = "usuario creado";
        return respon;
      }
    }
  } catch (error) {
    // error del servidor
    return { error: `Error en el servidor ${error}` };
  }
};
