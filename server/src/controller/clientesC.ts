import db from "../db";
interface Clientes {
  nombre: string;
  id: number;
  edad: number;
  userName: string;
  nacionalidad: string;
  gustos: string[];
  fetiches: string[];
  comentatios: string[];
  creador: string;
  fechaRegistro: {
    _seconds: number;
    _nanoseconds: number;
  };
  pagina: string;
}

export const getClientes = async () => {
  try {
    const clientes = await db.collection("clientes").get();
    let res:Clientes[] = [];
    clientes.forEach((doc) => {
      const data = doc.data() as Clientes;
      res.push(data)
    });
    return res;
  } catch (error) {
    // error del servidor
    return { error: `Error en el servidor ${error}` };
  }
};
