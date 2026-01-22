import express from "express";
import route from "./Routes/cpi-route.js";
const app = express();
const port = 5050;

app.use(express.json());

app.use(route);


const server = app.listen(port, () => {
  console.log(`Modern Express app listening on port ${port}`);
});
