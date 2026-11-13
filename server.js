import express from "express";
import { fileURLToPath } from "node:url";

const app = express();
app.set("view engine", "ejs");
app.set("views", fileURLToPath(new URL("./views/", import.meta.url)));

const citations = [
  { id: 1, texte: "Apprendre en pratiquant.", auteur: "Équipe du TP" },
];

app.get("/", (req, res) => {
  res.render("index", { citations });
});

app.get("/ping", (req, res) => {
  res.type("text/plain").send("Serveur de citations prêt.");
});

app.get("/citations", (req, res) => {
  res.json(citations);
});

app.use((req, res) => {
  res.status(404).json({ message: "Route introuvable" });
});

app.listen(3000, () => {
  console.log("Serveur disponible sur http://localhost:3000");
});
