const express = require("express");
const { restart } = require("nodemon");
const userModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use((req, res, next) => {
  console.log(`Request Type ${req.method}`);
  console.log(`Content Type ${req.headers["content-type"]}`);
  console.log(`Date ${new Date()}`);

  next();
});

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>oie</h1>");
});

app.get("/views/users", async (req, res) => {
  const users = await userModel.find({});
  res.render("index", { users });
});

// app.get('/users', (req, res) => {
//     const users = [
//         {
//             name: 'Felipe',
//             email: 'felipe@abc.com'
//         },
//         {
//             name: 'Luana',
//             email: 'luana@abc.com'
//         }
//     ];

//     res.status(200).json(users);
// });

app.get("/users", async (req, res) => {
  try {
    const users = await userModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await userModel.findById(id);

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await userModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await userModel.findByIdAndRemove(id, req.body);

    return res.status(204).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
