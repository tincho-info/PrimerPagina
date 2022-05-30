function startTime(){
    today=new Date();
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('reloj').innerHTML="Hora: "+h+":"+m+":"+s;
    t=setTimeout('startTime()',500);}
    function checkTime(i)
    {if (i<10) {i="0" + i;}return i;}
    window.onload=function(){startTime();}

    // Función: crea un nuevo párrafo y lo añade en la parte inferior del cuerpo HTML.

// function createParagraph() {
//     let para = document.createElement('p');
//     para.textContent = 'You clicked the button!';
//     document.body.appendChild(para);
// }
//     /*
//     1. Obtiene referencias de todos los botones de la página y los ordena en una matriz.
//     2. Recorre todos los botones y añade un clic event listener a cada uno de ellos.

//     Cuando se pulsa cualquier botón, se ejecuta la función createParagraph().
//     */

// const buttons = document.querySelectorAll('button');
// for (let i = 0; i < buttons.length ; i++) {
//     buttons[i].addEventListener('click', createParagraph);
// }    