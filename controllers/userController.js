import {
  getAllUsers,
  storeUser,
  deleteUser,
  checkUser,
} from "../models/User.js";

export const showAllUsers = async (req, res) => {
  getAllUsers().then((data) => {
    res.json(data);
  });
};

export const register = async (req, res) => {
  const { name, email, password, address } = req.body;
  storeUser(name, email, password, address).then((data) => {
    res.json(data);
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  checkUser(email, password).then((data) => {
    res.json(data);
  });
};

export const deleteById = async (req, res) => {
  const { id } = req.params;
  deleteUser(id).then((data) => {
    res.json(data);
  });
};
