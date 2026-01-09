import express from "express";
import { soma, subtrai } from "./app.js";

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 API de cálculos rodando com Docker");
});

app.get("/soma", (req, res) => {
  const { a, b } = req.query;
  res.json({ resultado: soma(Number(a), Number(b)) });
});

app.get("/subtrai", (req, res) => {
  const { a, b } = req.query;
  res.json({ resultado: subtrai(Number(a), Number(b)) });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 3000");
});
