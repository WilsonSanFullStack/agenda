import server from "./src/server";
import db from "./src/db";
const PORT = 3001;
db;
server.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}!`);
});
