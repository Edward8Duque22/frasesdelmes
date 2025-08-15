/*CUENTA REGRESIVA*/
  function actualizarCuentaRegresiva() {
    var ahora = new Date();
    var finDelDia = new Date();
    finDelDia.setHours(23, 59, 59, 999);

    var tiempoRestante = finDelDia - ahora;

    var horas = Math.floor(tiempoRestante / (1000 * 60 * 60));
    var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    var cuentaRegresiva = "Faltan " + horas + "h : " + minutos + "m : " + segundos + "s para la siguiente frase.";
    document.getElementById("cuentaRegresiva").innerText = cuentaRegresiva;
  }

  setInterval(actualizarCuentaRegresiva, 1000);

// Llamar a la función inicialmente para que se muestre de inmediato
  actualizarCuentaRegresiva();
/* ------------------------------------------------------------------------------------------ */

/* INICIO MES ENERO  */
//ENERO 01
function openModalEnero01() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero01.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Gracias por...',
    text: 'Por siempre escucharme, quererme, cuidarme, aconsejarme, hacerme volver a sonreir, devolverme el brillo en los ojos, preocuparte de mí, simplemente, gracias por llegar a mi vida y compartir un pedacito de tu vida conmigo.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 02
function openModalEnero02() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero02.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Puedo contarte algo?',
    text: 'No olvides que aquí tienes a alguien a quien le importas, que te quiere y piensa que eres lo mejor del mundo.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 03
function openModalEnero03() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero03.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Quisiera decirte que...',
    text: 'Eres la persona que quería encontrar.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 04
function openModalEnero04() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero04.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Sabes...',
    text: 'Desde el momento en que te conocí supe que había algo tuyo que necesitaba: simplemente eras tu.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 05
function openModalEnero05() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero05.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Jamás dudes que me iré...',
    text: 'Siempre estaré ahí para protegerte.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 06
function openModalEnero06() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero06.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Ante todo comprende que...',
    text: 'Siempre serás mi todo.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 07
function openModalEnero07() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero07.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Soy contigo ya que...',
    text: 'A veces, no me reconozco cuando estoy contigo porque solo puedo verte a ti.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 08
function openModalEnero08() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero08.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Siempre estas conmigo...',
    text: 'Llevo tu corazón conmigo, lo cargo en el mío, nunca estoy sin el.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 09
function openModalEnero09() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero09.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Amada mía...',
    text: 'Su sonrisa es tan cálida y su mirada tan profunda. Suavemente, en la rima del, tu me dices: El amor es amor, cuando está destinado a ser.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 10
function openModalEnero10() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero10.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'A veces pienso...',
    text: 'Tu sonrisa, estoy seguro quemó Roma.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 11
function openModalEnero11() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero11.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Cosas que cambian mi día...',
    text: 'Una sonrisita tuya, una de todas esas bellas que tienes.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 12
function openModalEnero12() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero12.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Me pregunta por ti...',
    text: 'Respondo: "Ella era mía, era mía, la llave en mi puño, mi puño en mi bolsillo, ella era mía".',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 13
function openModalEnero13() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero13.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Tu mi pertenencia...',
    text: 'Eres mía, como el aire que respiro, como un pensamiento fugaz o el agua de mi río.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 14
function openModalEnero14() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero14.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Siento morir...',
    text: 'Dejo de respirar cuando sonríes.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 15
function openModalEnero15() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero15.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Tu iluminas mi vida y mi camino...',
    text: 'Tus ojos hacen que las estrellas no brillen.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 16
function openModalEnero16() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero16.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'No hay luz...',
    text: 'Esta noche la luz del amor está en tus bellos ojos.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 17
function openModalEnero17() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero17.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Cosas que cambian mi día...',
    text: 'Una sonrisita tuya, una de todas esas bellas que tienes.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 18
function openModalEnero18() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero18.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Mis placeres...',
    text: 'Cuando veo tu sonrisa, puedo ver tu corazón. Cuando miro tu corazón, me hace sonreír',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 19
function openModalEnero19() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero19.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Sé que te amo...',
    text: 'Te amo, y sé que el amor es un sime gritp hacia el vacío, pero estoy enamorado de ti.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 20
function openModalEnero20() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero20.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'No importa el pasado solo te amo...',
    text: 'No importa qué pasó. No importa qué hayas hecho ni qué vayas a hacer. Siempre te amaré, lo aseguro.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 21
function openModalEnero21() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero21.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Lejos, cerca o como sea...',
    text: 'Te amaré no importa donde vayas.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 22
function openModalEnero22() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero22.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Me gustas así como eres...',
    text: 'Eres increíble de la manera que eres.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 23
function openModalEnero23() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero23.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Te amo de mil maneras pero por sobre todo...',
    text: 'Te amo con mi pasado y te amo por mi futuro.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 24
function openModalEnero24() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero24.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Si estás conmigo...',
    text: 'Eres mía, me tienes para siempre.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 25
function openModalEnero25() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero25.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Siempre preguntan por ti...',
    text: 'Y me respuesta es: "Para alguien tan hermosa como ella, que ama a alguien como yo, el amor siempre encuentra la manera".',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 25
function openModalEnero26() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero26.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Mírate al espejo...',
    text: 'Para mí eres perfecta.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 27
function openModalEnero27() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero27.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Que si me importas...',
    text: 'Solo digo en mi mente: "Amo a esa mujer, ella merece todo".',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 28
function openModalEnero28() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero28.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Nada se compara como ese día...',
    text: 'Y cuando tus labios tocaron los míos, supe que nada, nunca, se compararía con ese momento.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 29
function openModalEnero29() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero29.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'He llegado a la conclusión de que...',
    text: 'Creo que todo el mundo tiene un alma gemela con la que puede pasar el resto de su vida y esa eres tu.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 30
function openModalEnero30() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero30.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Prioridades?... Tu...',
    text: 'En este momento, eres lo más importante para mí. Eres lo más importante para mí, simpre.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//ENERO 31
function openModalEnero31() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/enero31.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Sabes que te amo de una sola manera?...',
    text: 'Te amo de la úninca manera en que un hombre necesita el aire.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
/* FIN MES ENERO  */

/*INICIO MES FEBRERO*/
//FEBRERO 01
function openModalFebrero01() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero01.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Tu generas estragos en mi ser...',
    text: 'Tu efecto gravitatorio deja girando un desorden notorio en mi vida y en mi mente.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 02
function openModalFebrero02() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero02.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Defectos? ¿Eso qué?',
    text: 'Solo porque tengas defectos no significa que no seas hermosa.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 03
function openModalFebrero03() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero03.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Que si era hermosa...',
    text: 'Ella era, es y será hermosa, y así como un atardecer, que no se le puede quitar la vista, magnífica.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 04
function openModalFebrero04() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero04.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Ella...',
    text: 'Ella me lo da todo.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 05
function openModalFebrero05() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero05.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Ella es como una flor...',
    text: 'Ella es mi flor y florece por aquel que la ama, cuida y vela por ella mejor.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 06
function openModalFebrero06() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero06.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Igualarla?',
    text: 'Jamás nadie podrá ser como ella.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 07
function openModalFebrero07() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero07.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Mi vida tiene color...',
    text: 'Conozco una chica, ella pone los colores en mi mundo.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 08
function openModalFebrero08() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero08.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Mi corazón estaba con ella...',
    text: 'Supe, desde el primer momento en que la besé, que mi amor sería para siempre.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 09
function openModalFebrero09() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero09.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿La amaste?...',
    text: 'Por supuesto que la amé. ¿No es así como empiezan todas las historias?.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 10
function openModalFebrero10() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero10.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Sentí una presión...',
    text: 'Ella sonrió y ahí estaba de nuevo. Esa presión en mi pecho. Esa presión llamada Amor.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 11
function openModalFebrero11() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero11.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Qué te impactó de ella?',
    text: 'Me enamoré de su coraje, de su sinceridad y de la manera en que se respetaba. La amo y es el comienzo de todo.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 12
function openModalFebrero12() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero12.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Ella era mi sueño...',
    text: 'Ella era mi sueño. Me hizo la persona que soy ahora. Pienso en ella todo el tiempo, nunca pudo haber sido otra.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 13
function openModalFebrero13() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero13.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Tu mi pertenencia...',
    text: 'Eres mía, como el aire que respiro, como un pensamiento fugaz o el agua de mi río.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 14
function openModalFebrero14() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero14.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Dudas de que te amo...',
    text: 'Dios!!! Si tu amor fuera un grano de arena, el mío sería un universo de playas.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 15
function openModalFebrero15() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero15.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Me flechaste...',
    text: 'De repente quise decirte lo encantadora que eres.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 16
function openModalFebrero16() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero16.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Un cambio?...',
    text: 'Me haces querer ser un hombre mejor.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 17
function openModalFebrero17() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero17.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Cosas que cambian mi día...',
    text: 'Una sonrisita tuya, una de todas esas bellas que tienes.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 18
function openModalFebrero18() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero18.jpg',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Me preguntan ¿Qué es el amor?...',
    text: 'Y mi respuesta es: <i>Lo que siento cuando la veo.</i>',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 19
function openModalFebrero19() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero19.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Cosas que cambian mi día...',
    text: 'Una sonrisita tuya, una de todas esas bellas que tienes.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
/*//Febrero 20
function openModalFebrero20() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero20.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Quiero que todo el mundo te conozca...',
    text: 'Eres mi persona favorita en todo el mundo.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 21
function openModalFebrero21() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero21.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Qué pone feliz a un hombre?...',
    text: 'Feliz es el hombre que encuentra una verdadera amiga, y aun más feliz, el que la encuentra en su esposa.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 22
function openModalFebrero22() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero22.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'No te lastimaría...',
    text: 'Aquí estás, eres mía, tratando de darme lo que tienes. ¿Cómo podría siquiera lastimarte?.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 23
function openModalFebrero23() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero23.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Bellisíma...',
    text: 'Es hermosa y se lo digo todos los días.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 24
function openModalFebrero24() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero24.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Cosas que cambian mi día...',
    text: 'Una sonrisita tuya, una de todas esas bellas que tienes.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 25
function openModalFebrero25() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero25.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'No sé...',
    text: 'Creo que eres mucho mejor que la chica de mis sueños... Eres toda una maravilla.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 26
function openModalFebrero26() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero26.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Qué es lo que más me llama la atención?...',
    text: 'Es su sonrisa, es que no veo algo más hermoso en este mundo que ver como se ilumina y refracta la luz, es como si fuera una estrella.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 27
function openModalFebrero27() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero27.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'He pasado muchos amores pero...',
    text: 'Después del primer amor llega tu amor verdadero, un amor real. Ese que te hace soñar, te hace amar la vida y amarle.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 28
function openModalFebrero28() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero28.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'No te amo por tu belleza...',
    text: 'Te amo porque cantas la canción que solo yo puedo entender.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
//Febrero 29
function openModalFebrero29() {
  Swal.fire({
    icon: 'custom',
    imageUrl: 'images/febrero29.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: '¿Puede ser difícil?...',
    text: 'No importa lo difícil que sea estar juntos, nada es más difícicl que estar separados.',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}*/

/*MENSAJE DE NO CONTENIDO*/
function openModalFebrero20() {
  Swal.fire({
    icon: 'info',
    // imageUrl: 'images/febrero.png',
    imageWidth: 100,
    imageHeigth: 100,
    title: 'Es todo, vuelve mañana',
    text: 'Las frases salen cada día, revisalo al iniciar el día',
    //confirmButtonText: 'Cerrar Mensaje', // Modifica el texto del botón
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
