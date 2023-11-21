import { Tickets } from "../models/tickets.js";

export const createTicket = async (data) => {
  try {
    let query = await Tickets.create(data);
    return query;
  } catch (error) {
    console.error(error);
  }
};
export const getTickets = async () => {
  try {
    let query = await Tickets.findAll();
    return query;
  } catch (error) {
    console.error(error);
  }
};
export const getTicketById = async (pk) => {
  try {
    let query = await Tickets.findByPk(pk);
    return query;
  } catch (error) {
    console.error(error);
  }
};
export const updateTicket = async (data) => {
  try {
    let query = await Tickets.update(data.data, { where: data.where });
    return query;
  } catch (error) {
    console.error(error);
  }
};
export const removeTicket = async (data) => {
  try {
    let query = await Tickets.destroy({ where: data });
    return query;
  } catch (error) {
    console.error(error);
  }
};
