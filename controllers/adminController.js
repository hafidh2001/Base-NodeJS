import {
  getAllAdmins,
  storeAdmin,
  getById,
  editAdminById,
  deleteAdmin,
} from "../models/Admin.js";

export const showAllAdmins = async (req, res) => {
  getAllAdmins().then((data) => {
    res.json(data);
  });
};

export const register = async (req, res) => {
  const { name, email, password, address } = req.body;
  storeAdmin(name, email, password, address).then((data) => {
    res.json(data);
  });
};

export const showById = async (req, res) => {
  const { id } = req.params;
  getById(id).then((data) => {
    res.json(data);
  });
};

export const editById = async (req, res) => {
  const { id } = req.params;
  const { name, password, address } = req.body;
  editAdminById(name, password, address, id).then((data) => {
    res.json(data);
  });
};

export const deleteById = async (req, res) => {
  const { id } = req.params;
  deleteAdmin(id).then((data) => {
    res.json(data);
  });
};
