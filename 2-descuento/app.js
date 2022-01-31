const { getUser } = require("./consulta")
const fs = require('fs');
const colors = require('colors');

 
const FILE_PATH = "./nombres.json";

const withOutPath = async() => {
  const nombres = await getUser()
  fs.writeFileSync('./nombres.json', JSON.stringify(nombres, null, 1), err =>   {
    if(err){
      console.log(err);
    }else{
      console.log('Archivo creado exitosamente');
    }
  })
  withPath()
}

const param = (p) => {
  let index = process.argv.indexOf(p)
  return process.argv[index+1]
}

let nombre = param('--nombre');
let monto = param('--monto');
let descuento = param('--descuento');

const withPath = () => {
   fs.readFile('./nombres.json', 'utf-8', (err, name) => {
    if(err){
      console.log(err);
    }else {
      let nombres = JSON.parse(name)
      encuentraCliente(nombres)
     } 
     })
    }

    let descuentoCalculo = () => {
     const desc = descuento.split("%");
     const calcDesc = monto - (monto * desc[0]/100);
     return calcDesc;
    }

const encuentraCliente = (nombres) => {
  const totalDesc = descuentoCalculo()
  const encuentra = nombres.find(e => e.nombre === nombre)
  const noClient = `Don: ${nombre}. Actualmente usted no es cliente en la tienda, favor registrarse para poder realizar compras`;
  const client = `Cliente: ${nombre}. Su compra es de $${monto}, porcentaje de descuento ${descuento}, da un total de: $${totalDesc}`;
  
  if (encuentra === undefined) { 
  fs.writeFileSync('./noClient.MD', JSON.stringify(noClient), err =>   {
    if(err){
      console.log(err);
    }else{
      console.log('Archivo creado exitosamente');
    }

  })
  clienteNoEncontrado()
  }else{
    fs.writeFileSync('./client.MD', JSON.stringify(client), err =>   {
      if(err){
        console.log(err);
      }else{
        console.log('Archivo creado exitosamente');
      }
    })
    clienteEncontrado()
  }
}

const clienteEncontrado = () => {
  fs.readFile("./client.MD",'utf-8', (err, mensaje) => {
   if (err) {
     console.log(err);
   }else{
     console.log('Cliente encontrado'.bgGreen.black, mensaje);
   }
  })
}
const clienteNoEncontrado = () => {
  fs.readFile("./noClient.MD",'utf-8', (err, mensaje) => {
   if (err) {
     console.log(err);
   }else{
     console.log('Cliente NO encontrado'.bgRed, mensaje);
   }
  })
}

fs.existsSync(FILE_PATH) ? withPath() : withOutPath();




