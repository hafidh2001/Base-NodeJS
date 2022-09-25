import { getAllAdmins, storeAdmins } from "../models/Admin.js";

const showAllAdmins = async (req, res) => {
  getAllAdmins().then((data) => {
    res.json(data);
  });
};

const register = async (req, res) => {
  const { email, password } = req.body;
  storeAdmins(email, password).then((data) => {
    res.json(data);
  });
};

export { showAllAdmins, register };
