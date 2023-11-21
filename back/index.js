import express from "express";
import { sequelize } from "./src/libs/connection.js";
import './src/models/admin.js' 
import './src/models/tickets.js'
import './src/models/usuarios.js'
//import router from "./src/routes/usuarios.routes.js";
import bodyParser from "body-parser";
import  routes  from "./src/routes/index.js";

const init = async () => {
  try {
    const app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
    app.get("/", (req, res) => res.send("Funciona"));
    app.listen(3000, () => console.log("Servidor funcionando"));
    routes(app)
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

init()
