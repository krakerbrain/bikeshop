let offset = 0;

const cargaInventario = (offset) => {
    axios
    .get('/inventarioTotal', {
        params: {
            offset
        }
    })
    .then(res => {
    const {data} = res;
    data.forEach(inv => {
        datosTabla.innerHTML += `
        <tr>
        <td scope="row">${inv.store_name}</td>
        <td>${inv.product_id}</td>
        <td>${inv.product_name}</td>
        <td>${inv.quantity}</td>
        <td><button type="submit" class="btn btn-primary">Ver</button></td>
        </tr>
        `
    })

    })
    .catch(({ response }) => alert(response.data.error));
}

const cargarLista = () => {
    offset = offset+25;
    datosTabla.innerHTML = "";
    recorreTabla.innerHTML = `<button class="btn btn-primary" id="atras" onclick ="retrocedeLista()"><<</button>`
    cargaInventario(offset); 
}


const retrocedeLista= () => {
  if (offset == 25) {
   recorreTabla.children[0].remove();  
  }
  offset = offset-25;
  datosTabla.innerHTML = "";
  cargaInventario(offset); 
}

export { cargaInventario, cargarLista, retrocedeLista}