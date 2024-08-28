import {
  initializeApp,
  applicationDefault,
  cert,
  ServiceAccount,
} from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";

import serviceAccount from "../firebase/clientespaginas-96d3d-8597c25fc006.json";

const DB = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

const db = getFirestore(DB);

export default db;
