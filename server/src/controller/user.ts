import db from "../../db";

export const getUser = async () => {
  try {
    const user = await db.collection("clientes").doc('2qaraKdGiWvosjnnTesD').get();
    console.log(user.data())
    return user.data();
  } catch (error) {
    console.log("error");
  }
};
