const express = require("express");
const { tiendas, marcas, categorias, inventario, inventarioTotal } = require("../controllers/controllers");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
  });

router.get('/tiendas', tiendas)
router.get('/categorias', categorias)
router.get('/marcas', marcas)
router.get('/inventario', inventario)
router.get('/inventarioTotal', inventarioTotal)

module.exports = router;