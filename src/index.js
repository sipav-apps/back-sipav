import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "../src/routes/index";

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

app.listen(3333);
console.log("servidor iniciou na porta 3333")