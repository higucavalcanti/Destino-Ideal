// controllers/maritalkController.js
const express = require("express");
const axios = require("axios");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

router.post("/", async (req, res) => {
  const url = process.env.REACT_APP_MARITACA_API_URL;
  const myKey = process.env.REACT_APP_MARITACA_API_KEY; 

  const authHeader = {
    "authorization": `Key ${myKey}`
  };

  try {
    const response = await axios.post(url, req.body, { headers: authHeader });

    // Verifique o status da resposta da API externa
    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      console.error("Erro na chamada da API externa:", response.statusText);
      res.status(500).json({ error: "Erro interno no servidor ao chamar a API externa" });
    }
  } catch (error) {
    console.error("Erro na chamada da API:", error.message);
    res.status(500).json({ error: "Erro interno no servidor ao processar a solicitação" });
  }
});

module.exports = router;
