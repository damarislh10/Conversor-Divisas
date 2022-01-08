// ------- Funcionalidad Conversor Divisas ------------

let monedaConv = document.getElementsByClassName("monedaConvertir");

let monedas = [
  "Elige tu Moneda",
  "Dolar",
  "Peso Mexicano",
  "Peso Colombiano",
  "Euro",
  "Libra Esterlina",
];

function ArrayOption() {
  let contador = 0;
  monedas.forEach((element) => {
    monedaConv[contador].innerHTML = element;
    contador++;
  });
}

ArrayOption();


// Function createDocumentFragment, createElement y appendChild
// List monedas a Select with options

var element = document.getElementById("monedaActual");
var fragment = document.createDocumentFragment();

monedas.forEach(function (moneda) {
  var lista = document.createElement("option");
  lista.textContent = moneda;
  fragment.appendChild(lista);
});

element.appendChild(fragment);


// Function setAttribute

let cambiarColor = document.getElementById("title_h1");
cambiarColor.setAttribute("style", "color: #228B22;");


// Method getValueInput 

let cantidadDinero;

const getValueInput = () => {
  if (document.getElementById("cantidadDinero").value !== "") {
    cantidadDinero = Number(document.getElementById("cantidadDinero").value);

    validarOpcion();

  } else {
    alert("Debe ingresar un valor");
  }
};

// Method validarOpcion catching exceptions 

let dolar = 0;

let monedaActual;
let monedaA_select;
let monedaConvertir;
let monedaC_select;

function validarOpcion() {
  monedaActual = document.getElementById("monedaActual");
  monedaA_select = monedaActual.options[monedaActual.selectedIndex].text;
  monedaConvertir = document.getElementById("monedaConvertir");
  monedaC_select = monedaConvertir.options[monedaConvertir.selectedIndex].text;

  if (
    monedaA_select == "Elige tu Moneda" ||
    monedaC_select == "Elige tu Moneda"
  ) {
    alert("Debe seleccionar un tipo de moneda");
  } 
  else if (monedaA_select === monedaC_select) {
    alert("Debe seleccionar un tipo de moneda distinto para convertir");
  } 
  else if (isNaN(cantidadDinero)) {
    alert("Debe ingresar un número");
  } 
  else {
    dolar = convertirMoneda();

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = ``;
    resultado.innerHTML = `<label id="resultDivisa">${dolar}</label>`;
  }
}


// Method Convertir a Dolar

function ConvertirDolar() {
  let divisa;

  if (monedaA_select == "Peso Colombiano") {
    divisa = cantidadDinero * 0.000250325;
  } 
  else if (monedaA_select == "Peso Mexicano") {
    divisa = cantidadDinero * 0.046539157;
  }
  else if (monedaA_select == "Euro") {
    divisa = cantidadDinero * 1.1325669;
  } 
  else if (monedaA_select == "Libra Esterlina") {
    divisa = cantidadDinero * 1.3290143;
  } 
  else if (monedaA_select == "Dolar") {
    divisa = cantidadDinero;
  }
  return divisa;
}


// Method Convertir a otras monedas

function convertirMoneda() {
  let divisaMoneda;

  if (monedaC_select == "Dolar") {
    divisaMoneda = ConvertirDolar();
  } 
  else if (monedaC_select == "Peso Colombiano") {
    divisaMoneda = ConvertirDolar() * 3995;
  } 
  else if (monedaC_select == "Peso Mexicano") {
    divisaMoneda = ConvertirDolar() * 21.668;
  } 
  else if (monedaC_select == "Euro") {
    divisaMoneda = ConvertirDolar() * 0.8856;
  } 
  else if (monedaC_select == "Libra Esterlina") {
    divisaMoneda = ConvertirDolar() * 0.75071;
  }

  return divisaMoneda;
}
