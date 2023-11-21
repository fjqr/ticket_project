import {
  createTicket,
  getTicketById,
  getTickets,
  removeTicket,
  updateTicket,
} from "../services/ticketsService.js";

export const create_ticket = async (req, res) => {
  try {
    let response = await createTicket(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
export const get_tickets = async (req, res) => {
  try {
    let response = await getTickets();
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
export const get_ticket_by_id = async (req, res) => {
  try {
    let response = await getTicketById(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
export const update_ticket = async (req, res) => {
  try {
    let data = { data: req.body, where: req.params };
    let response = await updateTicket(data);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
export const remove_ticket = async (req, res) => {
  try {
    let response = await removeTicket(req.params);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
