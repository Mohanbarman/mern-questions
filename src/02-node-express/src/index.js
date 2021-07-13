const express = require("express");
const { users } = require("./demoData");

const PORT = 4000;
const app = express();

app.use(express.json());

// getting all users
app.get("/users", (_, res) => {
  res.json(users);
});

// getting single user
app.get("/users/:id", (req, res) => {
  const user = users.find((_user) => parseInt(req.params.id) === _user.id);
  if (!user) {
    return res.json({ error: "User not found" });
  }
  res.json(user);
});

// TODO: Send erorr message when email already exists
// adding user
app.post("/user", (req, res) => {
  const user = {
    id: Math.floor(Math.random() * 100000),
    age: req.body.age,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  users.push(user);

  res.json(user);
});

// TODO: Create a route to delete a single user
// TODO: Create a route to update single user
// TODO: Add validation in request data
// TODO: Refactor code

app.listen(PORT, () => console.log(`Alive on port ${PORT} 🚀`));
