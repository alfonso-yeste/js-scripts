## Page category of the web page  winebusinessandmarketing.com


function(){

category = [];
category['/'] = 'home';
category['/cursos/'] = 'productos';
category['/postgrado/'] = 'landing-master';
category['/faqs/'] = 'preguntas-frecuentes';
category['/contacto/'] = 'contacto';
category['/cursos/cuenta/'] = 'login';
category['/cursos/carrito/'] = 'cesta';

if (category[window.location.pathname] == undefined) {
    return window.location.pathname;
}

return category[window.location.pathname];

}
