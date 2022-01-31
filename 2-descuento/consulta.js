const PoolSingleton = require("../database/poolbd.js")
const pool = PoolSingleton.getInstance();

const getUser = async () => {
    try {
      const result = await pool.query("SELECT first_name as nombre, last_name as apellido FROM customers");
      return result.rows;
    } catch (error) {
      return error;
    }
  };

module.exports = {
    getUser
}