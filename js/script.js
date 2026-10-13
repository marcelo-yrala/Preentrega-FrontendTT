document.addEventListener('DOMContentLoaded', function () {
  var params = new URLSearchParams(window.location.search);
  var producto = params.get('producto');

  if (producto) {
    var campoProducto = document.getElementById('producto');
    var mensaje = document.getElementById('mensaje');

    if (campoProducto) {
      campoProducto.value = producto;
    }

    if (mensaje && !mensaje.value) {
      mensaje.value = 'Hola, me interesa comprar: ' + producto;
    }
  }
});
