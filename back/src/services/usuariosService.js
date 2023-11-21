import { Usuarios } from "../models/usuarios.js";

export const findUsers = async () => {
  try {
    let query = await Usuarios.findAll();
    return query;
  } catch (error) {
    console.error(error);
  }
};

export const findUserById = async (pk) => {
  try {
    let query = await Usuarios.findByPk(pk);
    return query;
  } catch (error) {
    console.error(error);
  }
};

export const createNew = async (data) => {
  try {
    let query = await Usuarios.create(data);
    return query;
  } catch (error) {
    console.error(error);
  }
};

export const actualizarUsuario = async (data) => {
  try {
    let query = await Usuarios.update(data.data,{where: data.where});
    return query;
  } catch (error) {
    console.error(error);
  }
};

export const eliminarUsuario = async (data) => {
    try {
        let query = await Usuarios.destroy({where: data})
        return query
    } catch (error) {
        console.error(error)
        
    }
} 
