import "reflect-metadata"
import express, { request, response } from "express";
import { router } from "./routes";

import "./database"
const app = express();



app.use(express.json());
app.listen(3000, ()=> console.log("Server is running NLW"))

app.get("/test", (request, response) => {
    return response.send("ola nlw");
});

app.post("/test-post", (request, response) => {
    return response.send("Ola nlw")
})