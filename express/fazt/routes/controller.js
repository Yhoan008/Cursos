const path = require("path");

const controller = {};

let base = [{ name: "mario" }];

controller.getproducts = (req, res) => {
  res.json(base);
};

controller.name = (req, res) => {
  const name = req.params.nombre;
  if (name == base[0]) {
    res.send(`Hola ${name}, bienvenido!`);
  } else {
    res.send(`Tu nombre no es ${name} Mentiroso!!!`);
  }
};

controller.postname = (req, res) => {
  const request = req.body.name;
  base.push({ name: `${request}` });
  res.json({ response: "Nombre agregado" });
};

controller.bucle = async (req, res) => {
  //Tambien podemos hacer peticiones dentro del mismo servidor
  let datos = await fetch("http://localhost:3000/getproduct").then((response) =>
    response.json()
  );

  res.json(datos);
};

module.exports = controller;
