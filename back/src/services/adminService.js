import { Admin } from "../models/admin.js";

export const createAdmin = async (data) => {
  try {
    let query = await Admin.create(data);
    return query;
  } catch (error) {
    console.error(error);
  }
};
export const getAllAdmin = async () => {
  try {
    let query = await Admin.findAll();
    return query;
  } catch (error) {
    console.error(error);
  }
};
export const getAdminById = async (pk) => {
  try {
    let query = await Admin.findByPk(pk);
    return query;
  } catch (error) {
    console.error(error);
  }
};
export const updateAdmin = async (data) => {
  try {
    let query = await Admin.update(data.data, { where: data.where });
    return query;
  } catch (error) {
    console.error(error);
  }
};
export const removeAdmin = async (data) => {
  try {
    let query = await Admin.destroy({ where: data });
    return query;
  } catch (error) {
    console.error(error);
  }
};
