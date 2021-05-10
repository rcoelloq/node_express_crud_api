import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Bienvenido a la API de usuarios!"));
app.all("*", (req, res) =>res.send("Intentaste llegar a una ruta que no existe."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
