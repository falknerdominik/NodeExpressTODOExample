/* imports */
const express = require('express');
const app = express();

/* configuration */
const config = require("./config.json");

/* api */
const Todolist = require("./model/Todolist");
const todoApi = require("./api/todolist");

const list = new Todolist(
  [
    {
      "key": "1",
      "text": "Create update handler for TODO list."
    },
    {
      "key": "2",
      "text": "Create delete handler for TODO list."
    },
    {
      "key": "3",
      "text": "Create post handler for TODO list."
    }
  ]
);

app.get(config.todo.path, (req, res) => todoApi.read(req, res, list));
app.get(config.todo.path + config.todo.api.readItem, (req, res) => todoApi.readItem(req, res, list));
app.put(config.todo.path + config.todo.api.readItem, (req, res) => todoApi.update(req, res, list));
app.delete(config.todo.path + config.todo.api.readItem, (req, res) => todoApi.delete(req, res, list));
app.post(config.todo.path, (req, res) => todoApi.create(req, res, list));

app.listen(config.port, () => console.log('TODO Server is listening on port 3000!'))
