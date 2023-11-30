import {
  createAdmin,
  getAdminById,
  getAllAdmin,
  removeAdmin,
  updateAdmin,
} from "../services/adminService.js";
import bcrypt from "bcrypt";

export const newAdmin = async (req, res) => {
  try {
    let salt = await bcrypt.genSalt(10);
    let password = await bcrypt.hash(req.body.password, salt);
    req.body.password = password;
    console.log("admin===>", req.body)
    let response = await createAdmin(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const findAllAdmin = async (req, res) => {
  try {
    let response = await getAllAdmin();
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const adminById = async (req, res) => {
  try {
    let response = await getAdminById(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const update_admin = async (req, res) => {
  try {
    let data = { data: req.body, where: req.params };
    let response = await updateAdmin(data);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

export const remove_admin = async (req, res) => {
  try {
    let response = await removeAdmin(req.params);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
