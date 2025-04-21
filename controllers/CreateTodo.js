
const Todo = require("../models/Todo");

exports.CreateTodo = async (req, res) => {
  try {
    const { Title, Description } = req.body;
    if (!Title || !Description) {
      return res.status(400).json({ error: "Title and Description are required" });
    }

    const todo = new Todo({ Title, Description });
    const savedTodo = await todo.save();

    res.status(201).json(savedTodo);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: error.message });
  }
};
