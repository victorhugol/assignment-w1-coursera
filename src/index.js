import express from "express";
import morgan from "morgan";
import dishRouter from "./dishrouter.js";
import promotionsRouter from "./promotionsrouter.js";
import leaderRouter from "./leadersrouter.js";

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

app.use(dishRouter);
app.use(promotionsRouter);
app.use(leaderRouter);

app.listen(3000, () => {
  console.log("Running in PORT 3000");
});
