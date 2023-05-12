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
    {
      id: "0.1",
      marca: "Volvo",
      modelo: "xc90",
      ano: "23/23",
      preco: "519.999",
      descricao: "Com a condução com um pedal e tração integral, o XC90 Recharge tem um comportamento ágil ao mesmo tempo que proporciona um controlo relaxado, e uma condução potente e suave."
    },
    {
      id: "0.2",
      marca: "Volvo",
      modelo: "xc40",
      ano: "22/22",
      preco: "399.990k",
      descricao: "O XC40 Recharge não o obriga a escolher entre potência e condução responsável. Sente-se no seu lugar, comece a viagem e desfrute do conforto da condução com um pedal e da aceleração suave sem emissões de escape."
    },
    {
      id: "0.3",
      marca: "BMW",
      modelo: "X1",
      ano: "20/20",
      preco: "137k",
      descricao: "Com atualização visual como principal novidade, o BMW X1 2020 trouxe um design diferenciado para os faróis duplos full LED, bem como faróis de neblina em LED atualizados."
    },
    {
      id: "0.4",
      marca: "BMW",
      modelo: "X3",
      ano: "18/19",
      preco: "359.759",
      descricao: "A ênfase marcante na largura e nos elementos típicos da série X conferem à frente do BMW X3 uma aparência extremamente distinta."
    },
    {
      id: "0.5",
      marca: "BMW",
      modelo: "X5",
      ano: "20/20",
      preco: "469.990",
      descricao: "O chefe chegou e está colocando todos em seus devidos lugares: o BMW X5. Sua presença é clara para todos - integro, poderoso e elegante."
    },
    {
      id: "0.6",
      marca: "BMW",
      modelo: "320i",
      ano: "23/23",
      preco: "314.999",
      descricao: "o 320i M Sport oferece quadro de instrumentos digital, ar-condicionado de três zonas, abertura e fechamento elétricos do porta-malas, sistema de som Harman Kardon, teto solar elétrico, piloto automático,  adaptativo e faróis full-LED"
    },
    {
      id: "0.7",
      marca: "JEEP",
      modelo: "Wrangle",
      ano: "19/20",
      preco: "449.990",
      descricao: "Todas as versões do Jeep Wrangler contam com o badge Trail Rated devido a sua emblemática capacidade off-road, que atende a cinco importantes exigências Jeep: tração, distância do solo, articulação, manobrabilidade e capacidade de submersão."
    },
    {
      id: "0.8",
      marca: "JEEP",
      modelo: "Renegade",
      ano: "21/21",
      preco: "104.990",
      descricao: "Com o Jeep Renegade você tem o melhor companheiro para qualquer aventura: além do visual sofisticado, ele é equipado com a maior roda do segmento e o motor mais potente da categoria, tudo isso com a tração 4x4 e itens de capacidade off-road exclusivos no segmento"
    },
    {
      id: "0.9",
      marca: "FORD",
      modelo: "Bronco",
      ano: "22/22",
      preco: "271.999",
      descricao: "Ford Bronco Sport, um SUV imbatível. Performance e capacidade off-road excepcionais, tecnologia, conectividade e segurança para superar todo tipo de desafio: dentro e fora de estrada."
    },
    {
      id: "0.10",
      marca: "Land Rover",
      modelo: "Defender",
      ano: "20/21",
      preco: "173.990k",
      descricao: "Com proporções visualmente atraentes, atitude imbatível e durabilidade por essência, este é o Land Rover Defender."
    },
    {
      id: "0.11",
      marca: "Land Rover",
      modelo: "Evoque",
      ano: "20/21",
      preco: "319.990k",
      descricao: "Confiante e distinto, com linhas refinadas, o Range Rover Evoque tem uma presença inconfundível."
    },
    {
      id: "0.12",
      marca: "Porche",
      modelo: "Cayanne",
      ano: "21/21",
      preco: "680.880",
      descricao: "Além do conforto e da esportividade na estrada, os sistemas de suspensão mais desenvolvidos também aumentam o desempenho em terrenos exigentes."
    },
    {
      id: "0.13",
      marca: "Toyota",
      modelo: "SW4",
      ano: "23/23",
      preco: "420.090K",
      descricao: "O SW4 traz a melhor experiência a bordo. Com opções de 5 e 7 lugares, passageiros e bagagens se acomodam com tranquilidade"
    },
    {
      id: "0.14",
      marca: "Audi",
      modelo: "A4",
      ano: "21/22",
      preco: "398.990k",
      descricao: "Debaixo do capô, o Audi A4 2023 esconde o motor 2.0 litros TFSI, com 1.984 cm³ de cilindrada, dotado de coletor de exaustão integrado ao cabeçote, modelo de gerenciamento térmico com válvula rotativa"
    },
    {
      id: "0.15",
      marca: "Audi",
      modelo: "A6",
      ano: "19/20",
      preco: "449.990",
      descricao: "O A6 não arranca bruscamente, ele vai ganhando velocidade progressivamente, mas com força para te grudar no banco e abrir um sorriso no rosto."
    }

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