import { getAllTodos, storeList } from "../models/Todo.js";

export const showAllTodos = async (req, res) => {
  getAllTodos().then((data) => {
    res.json(data);
  });
};

export const addTodo = async (req, res) => {
  const { list } = req.body;
  const { user_id } = req.user;
  storeList(user_id, list).then((data) => {
    res.json(data);
  });
};
