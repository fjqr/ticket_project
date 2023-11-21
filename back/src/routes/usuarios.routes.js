import { Router } from "express";
import {
  getUsuarios,
  createUsers,
  obtenerUsuario,
  actualizar_usuario,
  deleteUsers,
} from "../controllers/usuariosController.js";
let userRouter = Router();

userRouter.get("/usuarios", getUsuarios);
userRouter.post("/crearusuarios", createUsers);
userRouter.get("/usuario/:id", obtenerUsuario);
userRouter.put("/updateuser/:id", actualizar_usuario);
userRouter.delete("/removeusers/:id", deleteUsers);

export default userRouter;
