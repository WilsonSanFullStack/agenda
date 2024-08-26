import db from "../../db";

export const getClientes = async () => {
  try {
    const clientes = await db.collection("clientes").get();
    let res
    clientes.forEach((doc) => {
      res = doc.data()
    });
    return res
  } catch (error) {
    console.log("error");
  }
};
