import { Router } from "express";
import {
  getUsuarios,
  createUsers,
  obtenerUsuario,
  actualizar_usuario,
  deleteUsers,
} from "../controllers/usuariosController.js";
import validation from "../middleware/validation.js";
import userSchema from "../schemas/usuarios.js";
let userRouter = Router();

userRouter.get("/usuarios", getUsuarios);
userRouter.post("/crearusuarios",validation(userSchema), createUsers);
userRouter.get("/usuario/:id", obtenerUsuario);
userRouter.put("/updateuser/:id", actualizar_usuario);
userRouter.delete("/removeusers/:id", deleteUsers);

export default userRouter;
