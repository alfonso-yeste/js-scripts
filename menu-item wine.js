document.querySelectorAll("li[id^='menu-item-']");


//luego hacemos una variable para que cuando alguien haga click en el parentelemnt se active

document.querySelectorAll("li[id^='menu-item'] a")[0].parentElement.className


//creamos una variable que sería tal que así:

function(){
  return {{Click Element}}.parentElement.className;
}

// y luego un activador que contenga la variable que hemos creado + contiene + menuitem

//crear una etiqueta de evento ga - event - menu
// categoria menu; acción click url; label click text

