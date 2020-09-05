//en la página de https://www.loteriaelmercat.es/carrito coger el valor de cada url/ y el revenue

<script>
(function(){
var carrito = [];

//loteria
var resumenCarritoLoteria = document.querySelectorAll("table#carro_loteria_tabla tr[class^='carro_loteria_tabla_f_']");

for (var x = 0; x < resumenCarritoLoteria.length; x++) {
    var fila = resumenCarritoLoteria[x];

    var name='/loteria-nacional-online';

    var price = fila.children[4].innerText.replace('€', '').trim();
    var quantity = fila.children[3].innerText.trim();
    var unitPrice = fila.children[2].innerText.replace('€', '').trim();

    if (unitPrice == '20.00') {
        name = '/loteria-navidad'
    }

    carrito.push({
        'name': name,
        'id': name,
        'price': price,
        'quantity' : quantity
    });
}

// apuesta
var resumenCarritoApuesta = document.querySelectorAll("table#carro_apuestas_tabla tr[class^='carro_apuestas_tabla_f_']");

var casasApuestas = [];

//TODO: Agregar las apuesta faltantes.

casasApuestas['EUROMILLONES'] = '/euromillones-online';
casasApuestas['PRIMITIVA JUEVES Ó SABADO'] = '/loteria-primitiva-online';
casasApuestas['GORDO DE LA PRIMITIVA'] = '/gordo-primitiva';
casasApuestas['BONOLOTO DIARIA'] = '/bonoloto-online';
casasApuestas['LA QUINIELA'] = '/quiniela-online';
casasApuestas['EL QUINIGOL'] = '/quingol-online';

for (var x = 0; x < resumenCarritoApuesta.length; x++) {
    var fila = resumenCarritoApuesta[x];

    var name = casasApuestas[fila.children[0].innerText];
    var price = fila.children[4].innerText.replace('€', '').trim();
    var quantity = 1;

    carrito.push({
        'name': name,
        'id': name,
        'price': price,
        'quantity' : quantity
    });
}
 
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
 
setCookie('_gtmCart', JSON.stringify(carrito), 0);
})();
</script>
