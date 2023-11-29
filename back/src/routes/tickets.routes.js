import { Router } from "express";
import {
  get_ticket_by_id,
  get_tickets,
  create_ticket,
  update_ticket,
  remove_ticket,
} from "../controllers/ticketsController.js";
import ticketSchema from "../schemas/tickets.js";
import validation from "../middleware/validation.js";
const ticketRouter = Router();

ticketRouter.get("/gettickets", get_tickets);
ticketRouter.get("/getticketid/:id", get_ticket_by_id);
ticketRouter.post("/createticket",validation(ticketSchema), create_ticket);
ticketRouter.put("/updateticket/:id", update_ticket);
ticketRouter.delete("/removeticket/:id", remove_ticket);

export default ticketRouter
