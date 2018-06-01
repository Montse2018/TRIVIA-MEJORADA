//Inicio de la funcion para el boton de inicio: iniciar sesion y mantener el formato html estático
function introducirNombre(user){
  //Zona de definición de variables
  var respuesta1 = ["1.Ciudad de México\n", "2.Tokio\n", "3.Estocolmo\n", "4.Zurich\n"];
  var respuesta2 = ["A.Nueva Delhi\n", "B.Beijin\n", "C.Pakistan\n", "D. Los Angeles California\n"];
  var respuesta3 = ["1.Lausanne\n","2.Fukuoka\n", "3.Amsterdam\n", "4.Barcelona\n"];
  var preguntas = ["¿Cuál es la capital más segura del mundo?\n", "¿Cuál es la ciudad más contaminada del mundo?\n", "¿Cuál es la mejor ciudad para vivir?\n"];
  var evaluacion = ["2. Tokio", "C.Pakistan", "3.Amsterdam"];
  var results = ["2", "C", "3"];
  var resp = [respuesta1, respuesta2, respuesta3];
  var score = 0;
  //Variables de posición
  var element = document.getElementById("name");
  var zonaRC = [document.getElementById("RC1"), document.getElementById("RC2"), document.getElementById("RC3")];
  var zonaRI = [document.getElementById("RI1"), document.getElementById("RI2"), document.getElementById("RI3")];
  var zonaSco = document.getElementById("zoneSc");
  var zonaDef = document.getElementById("default");
  //------------------------
  //Da bienvenida al usuario
  var name = prompt("Ingresa tu nombre :)");
  element.innerHTML = "Bienvenid@ " + name + " <3";
  // Pregunta si desea jugar
  var firstInter = confirm ("Bienvenid@ " + name + " ¿List@ para jugar?");
  if (firstInter){
      // Istrucciones de contestacion 
      alert ("Por favor coloque el número o la letra que corresponda a la respuesta correcta.");
      for (var i=0; i<3; i++){
        // Switch para pregunta1
        switch ((prompt(preguntas[i] + resp[i])).toUpperCase()) {
               case results[i]: <!--Respuesta correcta-->
               score = score + 1;<!--Suma puntos-->
               alert("Respuesta correcta");
               zonaRC[i].innerHTML = "Tu respuesta a: "+ preguntas[i] + " fue: " + evaluacion[i]+ " . Felicidades, es correcto";
               break;
               default:<!--Respuestas incorrectas-->
               alert("Respuesta incorrecta");
               zonaRI[i].innerHTML = "Tu respuesta a: "+ preguntas[i] + "es incorrecta. La respuesta correcta es: " + evaluacion[i];
               break;
        }
      }
      // Zona Score
      zonaSco.innerHTML = "Felicidades. Tu score es: "+score+"/3.";//Detiene el conteo y lo imprime en html
     // ----
  }else { // El usuario no desea jugar, despide al usuario
  zonaDef.innerHTML = "Buuu Buuuu :( Juguemos después)";
  }
}// Fin de funcion de boton de inicio
// Funcion de boton de salida, actualiza la pagina web
function refrescarWeb(confi){
  //Condicion para refrescar la pagina: El usuario desea salir
   var confirmation = confirm("Qué tal la evaluación. Deseamos verte pronto. \n ¿Deseas salir?");
   if (confirmation)
   {
      //window.location.reload();//Funcion del sistema js para realizar reload
     javascript:window.location.reload(true);
   }else {//No actualizar la pagiana: Saluda de nuevo
      alert("Hola....De nuevo");
   }
}
