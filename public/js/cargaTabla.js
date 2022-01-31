const tabla = (res) => {
    axios
    .get('/inventario', {
        params: {
            store: res[0],
            category: res[1],
            brand: res[2]
        }
    })
    .then(res => {
        const {data} = res;

        data.forEach(inv => {
            datosTabla.innerHTML = `
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

export const submitForm = (ev) => {
    ev.preventDefault();
    let selectInputs = document.querySelectorAll('select');
    let res = [];
    selectInputs.forEach(input => {
     res.push(input.value)
    })
    tabla(res)
}
