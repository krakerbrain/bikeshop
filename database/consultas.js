const PoolSingleton = require("./poolbd");
const pool = PoolSingleton.getInstance();

const getTiendas = async () => {

    try {
      const result = await pool.query("SELECT store_name FROM stores ORDER BY store_name;");
      return result.rows;
    } catch (error) {
      return error;
    }
  };
const getMarcas = async () => {

    try {
      const result = await pool.query("SELECT brand_name FROM brands ORDER BY brand_name;");
      return result.rows;
    } catch (error) {
      return error;
    }
  };
const getCategorias = async () => {

    try {
      const result = await pool.query("SELECT category_name FROM categories ORDER BY category_name;");
      return result.rows;
    } catch (error) {
      return error;
    }
  };
  const getInventarioTotal = async (offset) => {

    try {
      const result = await pool.query(`SELECT st.store_name, pr.product_id, pr.product_name, s.quantity FROM stores st
                                        INNER JOIN stocks s ON st.store_id = s.store_id
                                        INNER JOIN products pr ON pr.product_id = s.product_id
                                        INNER JOIN categories c ON c.category_id = pr.category_id
                                        INNER JOIN brands b ON b.brand_id = pr.brand_id
                                        limit 25 offset ${offset}`);
      return result.rows;
    } catch (error) {
      return error;
    }
  };




  const getInventario = async (tienda, categoria, marca) => {
      console.log(tienda, categoria, marca);
    let params = {
        text: `SELECT st.store_name, pr.product_id, pr.product_name, s.quantity FROM stores st
                INNER JOIN stocks s ON st.store_id = s.store_id
                INNER JOIN products pr ON pr.product_id = s.product_id
                INNER JOIN categories c ON c.category_id = pr.category_id
                INNER JOIN brands b ON b.brand_id = pr.brand_id
                WHERE st.store_name = $1 
                AND c.category_name = $2
                AND b.brand_name = $3`,
        values: [tienda, categoria, marca],
      };

    try {
      const result = await pool.query(params);
  
      return result.rows;
    } catch (error) {
      return error;
    }
  };


  module.exports = {
      getTiendas,
      getMarcas,
      getCategorias,
      getInventario,
      getInventarioTotal
  }