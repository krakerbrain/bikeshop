import { submitForm } from "./cargaTabla.js";
import { cargaInventario, cargarLista, retrocedeLista } from "./paginacion.js";

const tiendas = document.getElementById("tiendas");
const marca = document.getElementById("marca");
const categoria = document.getElementById("categoria");
const datosTabla = document.getElementById("datosTabla");
const recorreTabla = document.getElementById("recorreTabla");

window.submitForm = submitForm;
window.cargarLista = cargarLista;
window.retrocedeLista = retrocedeLista;

window.onload = () =>{
    creaTienda()
    creaCategoria()
    creaMarca()
    cargaInventario(0)
}

const creaTienda =() => {
    axios
    .get('/tiendas')
    .then(res => {
    const {data} = res;

        data.forEach(store => {
        tiendas.innerHTML += `
        <option value = "${store.store_name}">${store.store_name}</option>
        `
    });
    })
    .catch(({ response }) => alert(response.data.error));
}

const creaCategoria =() => {
    axios
    .get('/categorias')
    .then(res => {
    const {data} = res;

        data.forEach(cat => {
        categoria.innerHTML += `
        <option>${cat.category_name}</option>
        `
    });
    })
    .catch(({ response }) => alert(response.data.error));
}

const creaMarca =() => {
    axios
    .get('/marcas')
    .then(res => {
    const {data} = res;

        data.forEach(brand => {
        marca.innerHTML += `
        <option class = "options">${brand.brand_name}</option>
        `
    });
    })
    .catch(({ response }) => alert(response.data.error));
}








