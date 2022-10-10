const express = require("express");
const app = express();

app.use((req, res) => {
  res.json({ name: "Eduardo Aquiles", year: 28, student: "UNIUV" });
});
app.listen(3000, () => {
  console.log("Backend rodando...");
});
