/* la URL 

https://ofertas.csmgrup.com/mazda.php?utm_source=facebook&utm_medium=cpc


/* Primero creamos la variable/constante */
 
 const params = new URLSearchParams(window.location.search);

 /* Luego recogemos esos parametros de la URL en esta caso el utm_source */
 
 params.get('utm_source');


/*otra opción

var params = (new URLSearchParams(window.location.search)).get("s_search");


