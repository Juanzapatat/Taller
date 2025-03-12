/*Taller
1.  Crea y llama una función que recibe el ancho y el alto de un rectángulo y calcula su superficie.
2.  Crear y llamar a una función que recibe la velocidad en Km/hora y la muestra en metros/hora y millas/hora.
3.  Crear una función que calcule el factorial de un número ingresado por el usuario.
4.  Crear una función que muestre la tabla de multiplicar de un número ingresado por el usuario.
5.	Calcule el índice de masa muscular de una persona (IMC=peso/(altura x altura)), pidiendo como datos su altura y peso. imprima en pantalla lo siguiente: 
○	 Si el IMC es por debajo de 18.5 : Bajo peso debe ir al nutricionista
○	Si el IMC es 18.5—24.9 : Normal
○	Si el IMC es 25.0—29.9 : Sobrepeso 
○	Si el IMC es 30.0 o más : Obeso debe ir al nutricionista

6.	 Cree una función que pida la fecha actual y por medio de otra función calcule cuántos días y semanas faltan para terminar el año.

*/

//Funcion pra encontar superficie 
let anchoAltoRectangulo = (a, b) => a * b;

//Funcion para la velocidad
let velocidadAmetros = (a) => a*1000;
let velocidadAmph = (a) => a/1.60934;

//Funcion Factorial 
function factorial  (a) {
    //El factorial de 0=1, por eso se hace esta condicion
    if(a===0) 
        return 1;

    /*Se realiza un bucle for para incrementar el numero en la multiplicacion donde se inicializa en 1 y llega
   hasta el numero ingresado por el usuario
    */  
let inicio = 1;
for(let i = 1; i<=a; i++){
    inicio *=i;
   
}
//Retorna el valor ya multiplicado 
return inicio;
}

//Funcion tabla de multiplicar 
function tablaMultiplicar (a){

    /*la variable tabla esta vacia para poder recibir el #ingresado por el usuario y crear su tabla
    Se crea la variable i inicializada en 1 para arrangar la tabla de multiplicar, en este caso al incremneto de
    uno en uno hasta 10,se concatenan las instruciones de a = numero ingresado por el usuario e i=el tope de la tabla
    se multiplican dichos valores haciendo asi la tabla de multiplicar
    */
let tabla=' ';
for(let i = 1; i<=10 ; i++){
    tabla += `${a} x ${i} = ${a * i}\n`;
}
alert(tabla)
}

//FUncion para el IMC
function IMC (a,b){
let imc = a/(b*b);

//Condicional para saber el estado del usuario
if(imc>=30.0){
alert(`Su IMC  es de ${imc} por lo tanto usted esta en un grado de Obesidad; te recomendamos ir al nutricionista `)
}else if(imc<=29.9 && imc>=25.0){
    alert(`Su IMC es de ${imc} por lo tanto usted esta en Sobrepeso`)
}else if(imc<=24.9 && imc>=18.5){
    alert(`Su IMC es de ${imc} por lo tanto usted esta en Peso Normal`)
}else{
    alert(`Su IMC  es de ${imc} por lo tanto usted esta en Bajo Peso; te recomendamos ir al nutricionista ` )
}



}

//Funcion para la fecha = dias y semanas restantes                  REVISAR 
function fecha(a,b){
    const dias =365;
    const semanas=52;

let fechaXdias= a -365;
let fechaXsemanas=0;
}

//Variable para la entarda de los datos del menu 
let opcion;

do {
    //Menu
    opcion = Number(prompt(
        "1. Calcular la superficie de un rectángulo\n" +
        "2. Cambiar km/h a m/h y mph/h\n" + 
        "3. Calcular Factorial\n" +
        "4. Calcular tabla de multiplicar\n" + 
        "5. Calcular el Indice de masa corporal\n "
    ));

    //Condicion para que se ejecute el programa siemrpe y cuando este no sea el #7 = salir
    if (opcion != 7)
     

//Estructura de control condicional para ejecutar el programa y mensajes alucivos dependiendo de cada caso 
    switch (opcion) {

        case 1 :
            a = parseFloat(prompt("Ingrese el ancho del rectángulo "));
            b = parseFloat(prompt("Ingrese el alto del rectángulo"));
            alert(`La superficie del rectángulo es de : ${anchoAltoRectangulo(a,b)}` );     
            break;

            case 2 : 
            a=Number(prompt("Ingrese su valor de km/H"));
            alert (`Tu valor de km/h es igual a : ${velocidadAmetros(a)} m/h y tambien es igual a ${velocidadAmph(a)} mph/h`);
            break;

            case 3 : 
            a=Number(prompt("Ingrese el valor para hacerle el factorial "));
            alert(`El factorial de ${a} es: ${factorial(a)}`);
            break;

            case 4:
                a=Number(prompt("Ingrese un numero para ver su tabla de multiplicar"));
                alert(tablaMultiplicar(a));
                break;

                case 5 : 
                a = parseFloat(prompt("Ingrese su peso"));
                b=parseFloat(prompt("Ingrese su altura"));
                alert(IMC(a,b));
                break;

                case 6 : 

}
} while (opcion != 7){
    alert("Saliendo del programa ")

}
