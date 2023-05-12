const express = require("express");
const app = express();
const port = 3000;

// Sinalizar uso de Json
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Word!");
});
app.get("/oi", (req, res) => {
  res.send("Helo Word!");
});

// listar itens
const itens = {
  data: [
    { id: "1", 
      modelo:"HB20",
      marca: "Hyundai",
      Ano:"R$ 89.000",
      detalhes:"O Novo Hyundai HB20 tem personalidade arrojada e dinâmica, ao mesmo tempo que oferece ainda mais conforto e conveniência." },
      { id: "2", 
      modelo:"C3",
      marca: "Citroen",
      Ano:"R$ 95.000",
      detalhes:"O Novo Hyundai HB20 tem personalidade arrojada e dinâmica, ao mesmo tempo que oferece ainda mais conforto e conveniência." },

    ],
};



// endpoint [get] READ ALL
app.get("/itens", (req, res) => {
  res.send(itens);
});

// endpoint [get] READ one
app.get("/itens/:modelo", (req, res) => {
  const modelo = req.params.modelo;

  const item = itens.data.filter(function (a) {
    return a.modelo === modelo;
});
  res.send(item);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});