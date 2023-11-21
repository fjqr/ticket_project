import { Router } from "express";
import {
  adminById,
  findAllAdmin,
  newAdmin,
  remove_admin,
  update_admin,
} from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter.post("/createadmin", newAdmin);
adminRouter.get("/findalladmin", findAllAdmin);
adminRouter.get("/admin/:id", adminById);
adminRouter.put("/updateadmin/:id", update_admin);
adminRouter.delete("/removeadmin/:id", remove_admin);

export default adminRouter
