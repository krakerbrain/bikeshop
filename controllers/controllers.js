const { getTiendas, getMarcas, getCategorias, getInventario, getInventarioTotal } = require("../database/consultas");

const tiendas = async (req, res) => {
    try {
      const data = await getTiendas();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send({
        error: `Algo salió mal...${error}`,
        code: 500,
      });
    }
  };
const marcas = async (req, res) => {
    try {
      const data = await getMarcas();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send({
        error: `Algo salió mal...${error}`,
        code: 500,
      });
    }
  };

const categorias = async (req, res) => {
    try {
      const data = await getCategorias();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send({
        error: `Algo salió mal...${error}`,
        code: 500,
      });
    }
  };

  const inventarioTotal = async (req, res) => {
      const {offset} = req.query;


    try {
      const data = await getInventarioTotal(offset);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send({
        error: `Algo salió mal...${error}`,
        code: 500,
      });
    }
  };

const inventario = async (req, res) => {
    const {store, category, brand} = req.query
    try {
      const data = await getInventario(store, category, brand);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send({
        error: `Algo salió mal...${error}`,
        code: 500,
      });
    }
  };

  module.exports = {
      tiendas,
      marcas,
      categorias,
      inventario,
      inventarioTotal
  }