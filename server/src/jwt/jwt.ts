import jwt, { VerifyErrors } from "jsonwebtoken";
import dotenv from "dotenv";
// Load environment variables from a `.env` file
dotenv.config();
import cookieParser from "cookie-parser";
import { NextFunction, Request, Response } from "express";

const secretKey = process.env.SECRETKEY;

export const generateToken = (payload: object): string => {
  // Signs the payload with the secret key and returns the generated token
  return jwt.sign(payload, secretKey!, { expiresIn: "12h" });
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Token no proporcionado" });
    }
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        secretKey!,
        { complete: true },
        (err: VerifyErrors | null, decoded: object | undefined) => {
          if (err) {
            if (err.name === "TokenExpiredError") {
              return res.status(401).json({ message: "Token ha expirado" });
            }
            return res.status(403).json({ message: "Token inválido" });
          } else {
            resolve(decoded); // Resolver la promesa con los datos decodificados
            next();
          }
        }
      );
    });
  } catch (error) {
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
};
