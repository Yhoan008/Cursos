import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const router = express.Router()

  //Agregamos configuraciones del servidor
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(router);

  app.use(vite.middlewares);

  app.use("*", async (req, res,next) => {

    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        "utf-8"
      );

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

      const appHtml = await render(url);

      const html = template.replace("<!--outlet-->", appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  router.get('/alive',(req,res)=>{
    res.send("Server Alive");
  })

  const port = 3000;
  app.listen(port, () => {
    console.log("Server on port ", port);
  });
}

createServer();
