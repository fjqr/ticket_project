import { Sequelize } from "sequelize";
import DATABASE from "../config/config.js";

export const sequelize = new Sequelize(
  DATABASE.name,
  DATABASE.user,
  DATABASE.password,
  {
    host: DATABASE.host,
    dialect: DATABASE.dialect,
  }
);

