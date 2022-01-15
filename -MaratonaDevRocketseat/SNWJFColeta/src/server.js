const express = require("express");
const server = express();

// Importando o DB
const db = require("./database/db");

// Setup folder public
server.use(express.static("public"));

// Habilitando o body no app
server.use(express.urlencoded({ extended: true }));

// Use template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true
});

// Page main
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Seu marketplace de coleta de resíduos" });
});

// Page create-point
server.get("/create-point", (req, res) => {
  // console.log(req.query);
  return res.render("create-point.html");
});

server.post("/save-point", (req, res) => {

  // Salvando no DB
  const query = `
         INSERT INTO places (
           image,
           name,
           address,
           address2,
           state,
           city,
           items) VALUES (?,?,?,?,?,?,?);`

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items];

  function afterInsertData(err) {
    if (err) {
      console.log(err);
      return res.send("Erro ao cadastrar!");
    }
    console.log("Cadastrado com sucesso!!!")
    console.log(this);

    return res.render("create-point.html", { saved: true });
  }

  db.run(query, values, afterInsertData);
  // req.body Corpo da Requisição
  console.log(req.body);

});

// Page search
server.get("/search", (req, res) => {
  // Pesquisando os endereços
  const search = req.query.search;
  if (search == "") {
    return res.render("search-results.html", { total: 0 });
  }

  // Consultando os dados na tabela
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err);
    }

    // Trazendo o total de pontos encontrados
    const total = rows.length;

    // Mostrando os dados no html
    return res.render("search-results.html", { places: rows, total: total });
  });
});
// Start Server
server.listen(3000);