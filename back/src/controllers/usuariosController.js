import {
  findUsers,
  createNew,
  findUserById,
  actualizarUsuario,
  eliminarUsuario
} from "../services/usuariosService.js";
import bcrypt from "bcrypt"

export const getUsuarios = async (req, res) => {
  try {
    let response = await findUsers();
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    let response = await findUserById(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const actualizar_usuario = async (req, res) => {
  try {
    let data = {data: req.body, where: req.params}
    let response = await actualizarUsuario(data);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const createUsers = async (req, res) => {
  try {
    let salt = await bcrypt.genSalt(10)
    let password = await bcrypt.hash(req.body.password,salt)
    req.body.password = password
    console.log(req.body)
    let response = await createNew(req.body);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const deleteUsers = async (req,res) => {
  try {
    let response = await eliminarUsuario(req.params)
    res.json({success:true,data:response})
  } catch (error) {
    res.status(500).send({success:false,message:error.message})
  }
}
