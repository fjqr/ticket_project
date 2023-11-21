import { DataTypes } from "sequelize";
import { sequelize } from "../libs/connection.js";
import { Admin } from "./admin.js";
import { Usuarios } from "./usuarios.js";

export const Tickets = sequelize.define("tickets", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "En proceso"
  },
});
Admin.hasMany(Tickets, {
  foreignKey: "admin_id",
});
Tickets.belongsTo(Admin, {
  foreignKey: "admin_id",
});

Usuarios.hasMany(Tickets, {
  foreignKey: "usuario_id",
});
Tickets.belongsTo(Usuarios, {
  foreignKey: "usuario_id",
});
