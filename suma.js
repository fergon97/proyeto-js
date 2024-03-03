let precioInicial = 400000;
let cantidadProductos = 0;

function sumarRestarProducto(cambio) {
  cantidadProductos += cambio;
  if (cantidadProductos < 0) {
    cantidadProductos = 0;
  }
  actualizarCantidad();
  actualizarTotal();
}

function actualizarCantidad() {
  let cantidadElemento = document.querySelector(".cantidad");
  cantidadElemento.textContent = cantidadProductos;
}

function actualizarTotal() {
  let precioBaseElemento = document.querySelector(".precio-inicial");
  let valorTotalElemento = document.querySelector(".valor-total");

  let precioBase = parseInt(precioBaseElemento.innerHTML);

  // Total a pagar
  let totalPagar = precioBase * cantidadProductos;

  // Actualizar el valor total
  valorTotalElemento.innerHTML = totalPagar.toLocaleString();
}
