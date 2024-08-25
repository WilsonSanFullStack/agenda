import db from "../../db";

export const getUser = async () => {
  try {
    const user = await db.collection("clientes").get();
    let res
    user.forEach((doc) => {
      res = doc.data()
    });
    return res
  } catch (error) {
    console.log("error");
  }
};
