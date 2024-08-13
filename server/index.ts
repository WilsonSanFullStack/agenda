import server from "./src/server";
const PORT = 3001;

server.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}!`);
});
