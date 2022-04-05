function operacionesmate(){
   var a=0;
   var b=0;
       a = parseInt(prompt("Por favor ingrese el primer valor: "));
       b = parseInt(prompt("Por favor ingrese el segundo valor: "));
       var suma=a+b;
       var resta = a-b;
       var multiplicacion = a*b;
       var division = a/b;
   alert ("el resultado de la \n suma: "+ suma + "\n resta: " + resta + "\n multiplicación: " + multiplicacion + "\n division: " + division);  
   }
   
function nummayor() {
var a=0;
var b=0;
   a = parseInt(prompt("Ingrese el primer valor: "));
   b = parseInt(prompt("Ingrese el segundo valor: "));
   if(a>b){
       alert("El número mayor es: " + a);
   }if(b>a){
   alert("El número mayor es: " + b);
   }else
   alert  ("Los valores son iguales");
}

function nunmenor() {
var a=0;
var b=0;
var c=0;
   a = parseInt(prompt("Ingrese el primer valor: "));
   b = parseInt(prompt("Ingrese el segundo valor: "));
   c = parseInt(prompt("Ingrese el tercer valor: "));
if ((a<b)&&(a<c)) {
   alert("El número menor es: " + a);
}if ((b<a)&&(b<c)) {
   alert("El número menor es: " + b);
}if ((c<a)&&(c<b)) {
   alert("El número menor es: " + c);
}
alert("Los tres valores son iguales" );
}

function par_impar(){
   var a=0;
   a = parseInt(prompt("Ingrese un valor: "));
   if (a %2==0){
       alert("El número "+ a +" es par");
   }else {
       alert("El número " + a + " es impar" );
   }
}

function cuadrado(){
var a=0;
var elv=0;
a = parseInt(prompt("Ingrese el número del cual desea saber el cuadrado: "));
elv=a*a;
alert ("el cuadrado de "+ a + " es: "+ elv);
}

function area_triangulo(){
   var h=0;
   var b=0;
   var total=0;
   b = parseInt(prompt("Ingrese la base del triangulo: "));
   h = parseInt(prompt("Ingrese la altura del triangulo: "));
   total = b*h/2
   alert ("El area del triangulo es: "+ total);
}

function conversion(){
   var m=0;
   var cm=0;
   m = parseFloat(prompt("Ingrese los metros que desea convertir a centimetros: "));
cm = m*100/1.0;
alert ("Los centimetros de "+m+"m. es: "+ cm+"cm");
}

function edad(){
   var año=0;
   var edad = 0;
año = parseInt(prompt("Ingrese el año de nacimiento"));
edad = 2022 - año;
alert ("Su edad es: " + edad);
}

function rentabilidad(){
var cap=0;
var años=0;
var gan=0;
var gantol=0;
cap = parseInt(prompt("ingrese el valor que desea invertir: "));
gan=2*cap/100
alert("Las ganancias por mes es de: " + gan);
años = parseInt(prompt("Ingrese el año en meses que desea invertir el dinero: "));
gantol=gan*años
alert("lo que ganara en "+años+" meses es: "+gantol);
}

function colegio(){
var nombre="";
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var suma=0;
var promedio=0;
nombre = prompt("Ingrese el nombre del estudiante: ");
a = parseFloat(prompt("Ingrese la primera nota: "));
b = parseFloat(prompt("Ingrese la segunda nota: "));
c = parseFloat(prompt("Ingrese la tercera nota: "));
d = parseFloat(prompt("Ingrese la cuarta nota: "));
e = parseFloat(prompt("Ingrese la quinta nota: "));
suma = a+b+c+d+e;
alert ("la suma de las notas es: "+suma);
promedio = suma/5

if(promedio<3.0){
alert("No aprobo la materia, la nota de "+ nombre +" es: "+ promedio);   
}else
alert("Aprobo la materia, la nota de "+ nombre +" es: "+ promedio); 
}

function descuento(){
var kl=0;
var T=0;
var D=0;
var TD=0;
kl=parseInt(prompt("Ingrese los kilos de fruta a comprar: "));
T=4500*kl;
if(kl<=2){
   alert("No tendra un descuento. \n Su total a pagar es: "+ T );
   alert ("¡Gracias por su compra!");
}if ((kl>2)&&(kl<=5)){
alert("Se le Realizara un descuento del 10% a: " + T);
D=10*T/100;
TD=T-D;
alert ("Su valor a pagar es: "+"$"+TD);
}if((kl>5)&&(kl<10)){
   alert("Se le Realizara un descuento del 15% a: " + T);
D=15*T/100;
TD=T-D;
alert ("Su valor a pagar es: "+"$"+TD+"\n"+"¡Gracias por su compra!");
}if (kl>=10){
alert("Se le Realizara un descuento del 20% a: " + T);
D=20*T/100;
TD=T-D;
alert ("Su valor a pagar es: "+"$"+TD+"\n"+"¡Gracias por su compra!");
}
}