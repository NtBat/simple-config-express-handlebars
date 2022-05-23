const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  const user = {
    name: "Nathan",
    surname: "Batista",
  };

  const auth = false;

  const posts = [
    {
      title: "NodeJS",
      category: "Javascript",
    },
    {
      title: "React",
      category: "Javascript",
    },
  ];

  res.render("home", { user: user, auth, posts });
});

app.listen(3000, () => {
  console.log("Server is running");
});
