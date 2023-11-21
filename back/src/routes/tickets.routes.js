import { Router } from "express";
import {
  get_ticket_by_id,
  get_tickets,
  create_ticket,
  update_ticket,
  remove_ticket,
} from "../controllers/ticketsController.js";

const ticketRouter = Router();

ticketRouter.get("/gettickets", get_tickets);
ticketRouter.get("/getticketid/:id", get_ticket_by_id);
ticketRouter.post("/createticket", create_ticket);
ticketRouter.put("/updateticket/:id", update_ticket);
ticketRouter.delete("/removeticket/:id", remove_ticket);

export default ticketRouter
