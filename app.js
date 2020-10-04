// 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se
//  deberá imprimir en pantalla
var PrimerArgumento=parseInt(prompt("Escribe el primer argumento"));
var SegundoArgumento=parseInt(prompt("Escribe el segundo argumento")); 
console.log(PrimerArgumento + SegundoArgumento);
alert("La suma es: " + (PrimerArgumento + SegundoArgumento));
// 2. Un estudiante realiza 4 exámenes, calcular el promedio de estos
var PrimeraNota=parseInt(prompt("Escribe la primera nota"));
var SegundaNota=parseInt(prompt("Escribe la segunda nota")); 
var TerceraNota=parseInt(prompt("Escribe la tercera nota"));
var CuartaNota=parseInt(prompt("Escribe la cuarta nota"));
console.log((PrimeraNota + SegundaNota+TerceraNota+CuartaNota)/4);
alert("El promedio es: " + ((PrimeraNota + SegundaNota+TerceraNota+CuartaNota)/4)); 
// 3. Calcular el área de un rectángulo
var base=parseInt(prompt("Escribe la base del rectangulo"));
var altura=parseInt(prompt("Escribe la altura del rectangulo"));
 
alert("El area del rectangulo es: " + (base * altura));

// 4. Calcular el área de un triángulo
var base=parseInt(prompt("Escrbe la base del triangulo"));
var altura=parseInt(prompt("Escribe la altura del triangulo"));
 
alert("El area del triangulo es: " + ((base * altura)/2));

// 5. Calcular el área de una circunferencia
var  radio=parseInt(prompt("Escribe el radio"))
const pi="π"
alert("El area de la circunferencia es: " + ((radio*radio)+pi));
// 6. Determinar el sueldo semanal de un trabajador basándose en sus horas
// trabajadas y su salario de hora hombre   
var DiasTrabajados=parseInt(prompt("Escribe cuantos dias a trabajado"));
var SalarioDiario=parseInt(prompt("Escribe cual es su salario diario"));
console.log(DiasTrabajados*SalarioDiario);
// 7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
// Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas,
// pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a
// resolver el problema, determinando cuantas pulgadas debe pedir con base en
// los metros que requiere. Represéntelo mediante el diagrama de flujo y el
// pseudocódigo (1 pulgada = 0.0254 m).
var CantidadDeMetros=parseInt(prompt("Escribe la cantidad de metros"));
const Pulgada=0.0254
console.log(CantidadDeMetros*Pulgada);
alert("La cantidad de pulgadas son: " + (CantidadDeMetros*Pulgada)+"pulgadas");
// 8. Una empresa importadora desea determinar cuántos dólares puede adquirir
// con equis cantidad de dinero peruano
var MontoSoles=parseInt(prompt("Introduze el monto en soles"));
var ValorDolar=parseInt(prompt("Introduze el valor del dolar"));
console.log(MontoSoles/ValorDolar);
alert("La cantidad de pulgadas son: " + (MontoSoles/ValorDolar)+"dolares");

// 9. Una empresa que contrata personal requiere determinar la edad de las
// personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se
// les pregunta el año en que nacieron
var AñoActual=parseInt(prompt("Ingrese el año actual"))
var FechaDeNacimiento=parseInt(prompt("Ingrese su fecha de nacimiento"))
console.log(AñoActual-FechaDeNacimiento);
alert("Su edad es: " + (AñoActual-FechaDeNacimiento)+"años");
// 10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
// edad de la persona de menor edad

var personaA = window.prompt("qué topping quieres");
var PersonaB =  x;
var PersonaC =  y;


		if(personaA==""){
			
		}else if(PersonaB == "x"){
			
		}else if(PersonaC == "y"){
			
		}else  if(topping == "z"){
			
		}else{
			
		}

		precioFinal = helado + precio;
		document.write("el helado cuesta " + precioFinal + " €");
// 11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
// año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5
// años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo
// y represéntelo ,que permita determinar el bono que recibirá un trabajador
var AñosLaborando=(parseInt(prompt(" Introduzca cuanto Años lleva laborando")));


if(AñosLaborando= 1) {
  console.log("Su bono es de 100 soles")
  alert("Su bono es de 100 soles")
}
else  if(AñosLaborando= 2 ){    
   console.log("Su bono es de 200 soles")
   alert("Su bono es de 200 soles")
}
else  if(AñosLaborando= 3 ){
   console.log("Su bono es de 3000 soles")
   alert("Su bono es de 3000 soles")
}  
else  if(AñosLaborando= 4 ){ 
   console.log("Su bono es de 400 soles")
   alert("Su bono es de 400 soles")  
}  
else  if(AñosLaborando => 5){
   console.log("Su bono es de 1000 soles")
   alert("Su bono es de 1000 soles") 
} 

// 12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual
// durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido
// en cada uno de los 6 años? Realice el algoritmo y representan la solución,
// utilizando el ciclo apropiado
var SalarioInicial = 1500
var SalarioFinal=parseInt(prompt("¿Cuál es su salario al cabo de 6 años?"));
        
		var incremento = (SalarioInicial+0.1*1500)
		var incremento2 = (incremento+0.1*1500)
        var incremento3 = (incremento2+0.1*1500)
        var incremento4 = (incremento3+0.1*1500)
        var incremento5 = (incremento4+0.1*1500)
        var incremento6 = (incremento5+0.1*1500)

		if(incremento=="1"){
			
        }
        else if(incremento2 == "2"){
			
        }
        else if(incremento3 == "3"){
			
        }
        else  if(incremento4 == "4"){
           
        }
		else  if(incremento4 == "5"){
			
        }
        else  if(incremento4 == "6"){
           
            
		}
        SalarioFinal= SalarioInicial + 6*(0.1*1500)   
        console.log( 1500 + 6*(0.1*1500) +"este es su salario al cabo de 6 años"  );
			
		

// 13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el
// número de aprobados y reprobados
var nota=parseInt(prompt("Ingrese su nota"));
   if(nota > 13 ){
       console.log("aprobado")
   }
   else if(nota > 13 ) {
    console.log("desaprobado")
   }
   else{
       console.log("no tiene nota")
   }



// 14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea
// contabilizar, de un lote de N focos, el número de focos de cada color que hay en
// existencia
var focosA =parseInt(prompt("¿cuantos focos verdes hay?"));
var focosB=parseInt(prompt("¿cuantos focos blancos hay?"));
var focosC=parseInt(prompt("¿cuantos focos rojos hay?"));
console.log ("hay"+(focosA+focosB+focosC) +"focos");



// 15. Realice un algoritmo para determinar si una persona puede votar con base en
// su edad en las próximas elecciones
var Edades =parseInt(prompt("Ingrese su edad"));
var ModuloA ="modulo 1"

if(Edades > 18 < 25 ){
    console.log("modulo 1")
}
else if(Edades > 25 < 35 ){
    console.log("modulo 2")
}
else if(Edades > 35 < 50 ){
    console.log("modulo 3")
}

else{
    console.log(modulo4)
}


