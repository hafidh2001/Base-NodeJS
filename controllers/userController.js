import { getAllUsers, storeUser, getById } from "../models/User.js";

const showAllUsers = async (req, res) => {
  getAllUsers().then((data) => {
    res.json(data);
  });
};

const register = async (req, res) => {
  const { name, email, password, address } = req.body;
  storeUser(name, email, password, address).then((data) => {
    res.json(data);
  });
};

export { showAllUsers, register };
