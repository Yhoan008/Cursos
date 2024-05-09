const express = require("express");
const path = require("path");

const controller = require("./routes/controller");

const router = express.Router();

const app = express();

app.set("soyUnaVariable",1)

app.use((req, res, next) => {
  console.log("Esto se ejecuta cada vez que haces una peticion");
  next();
});

app.use(express.json());
app.use(router);


router.get("/getproduct", controller.getproducts);
router.get("/bucle", controller.bucle);
router.get("/:nombre", controller.name);
router.post("/post", controller.postname);

//no olvida que las rutas se ejecutan en orden
app.use("/",express.static(path.join(__dirname, "/")));

app.listen(3000, () => {
  console.log("server on port");
});
