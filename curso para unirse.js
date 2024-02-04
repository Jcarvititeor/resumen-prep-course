/*

//comentario de una linea

var x = 9 //<lo de alli no esta en el comentario

/* comentarios
 de varias lineas
puede ser
en varias
lineas/

// variasbles, cajita donde guaradamos varoles

var mivariable = "fortnite";
console.log(mivariable);


//mirar consola cuadno pones console.log
mivariable = 6754376;
console.log(mivariable);

//las variables pueden contener cualquier caracter

var minombre = "javier";
console.log(minombre);

var a;
var b = 2;
console.log(a);//error pq no tiene valor
console.log(b)//ta bien pq tiene valor

//OPERADOR DE ASIGNACION
//el operador de asignacion es el =, da un valor a las cosas 

//ASIGNAR UN VALOR DE UNA VARIABLE A OTRA VARIABLE

var c = 5;
var d = c;

console.log(c);
console.log(d);

// INICIALIZAR VARIABLES

var e = 1234567; //inicializando
var miIdioma = "español";

//VARIABLES NO INICIALIZADAS

var f;
var g;
console.log(f);
f =566666;
console.log(f);

//MAYUSCULAS Y MINISCULAS

var mivariacion = 45555555327627842735;
//console.log(mivariacioN);    lo pomgo como comentario pq sino se lagea la consola
//tiene que estar igual a como lo escribimos

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//SUMA

var suma = 465 + 76;
console.log(suma);

//RESTA

var resta = 325667 - 325660;
console.log(resta);
resta = 5 - 15;
console.log(resta);
resta = 15 - 15;
console.log(resta);

//MULTIPLICACION

var producto = 5 * 3
console.log(producto);
producto = 526473246 * 0
console.log(producto);
producto = -15 * 6;
console.log(producto);

//DIVISION

var cociente = 15 / 3
console.log(cociente);
cociente = 10 / 3;
console.log(cociente);
cociente = 3 / 0
console.log(cociente)

//NUMEROS DECIMALES

var decimal = 234.5;

//MULTIPICAR NUMEROS DECIMALES

var prodcutos = 4.4 * 10.3;
console.log(prodcutos);
producto = 2.5 * 2;
console.log(prodcutos);
prodcutos = 3.6 * 0;
console.log(prodcutos);

//DIVIDIR NUMEROS DECIMALES

var cocientes = 5.0 / 2.0;
console.log(cocientes)
cocientes = 2.3 / 6.7;
console.log(cociente);
//pasa lo mismo con dividir en 0

// RESTO DE UNA DIVISION

var resto = 15 % 5;
console.log(resto);
var resto = 15 % 1;
console.log(resto);
var resto = 15 % 2;
console.log(resto);
var resto = 15 % 3;
console.log(resto);

//INCREMENTAR VALOR DE VARIABLES

var librosComprados = 105;
console.log(librosComprados);
//opcion 1
librosComprados = librosComprados + 1;
console.log(librosComprados);
//opcion 2
librosComprados++;
console.log(librosComprados);
//++ = +1

//REDUCIR VALOR DE UNA VARIABLE

var numeroDeEstudiantes = 2324;
console.log(numeroDeEstudiantes);
numeroDeEstudiantes = numeroDeEstudiantes - 1;
console.log(numeroDeEstudiantes);
numeroDeEstudiantes--;
console.log(numeroDeEstudiantes);
// -- = -1

//ASIGNACION DE SUMA

var ghgh = 32
ghgh += 5;
console.log(ghgh);

var ventas = 2362.9
console.log(ventas);
ventas += 653.2;
console.log(ventas)

//ASIGNACION DE RESTA

var o = 762
o -= 37
console.log(o);

var deudas = 7236;
console.log(deudas);
deudas -= 7000;
console.log(deudas);

//ASIGNACION MULTIPLICACION

var tgh = 5623
tgh *= 2;
console.log(tgh);

var salario = 45000;
console.log(salario);
salario *= 5;
console.log(salario);

//ASIGNACION DE DIVISION

var jk = 40;
jk /= 4;
console.log(jk);

var salariont = 45000;

salariont /= 2;
console.log(salariont);

//_________________________________________________________________________________________________________________________________________________________________________________________

//VARIABLES CON CADENAS DE CARACTERES

var nombre = "javier";
var apellido = 'critto';

//ESCAPAR COMILLAS EN CADENAS DE CARACTERES

var uy = "uy sexo \"con comillas\"";
console.log(uy);

//CADENA DE CARACTERES CON COMILLAS SIMPLES

var setso;
setso = 'setso?"sajin"';
console.log(setso);

//SECUENCIAS DE ESCAPE

console.log(" estoy aprendiendo \\javascript");
console.log("depende del \tipo de sangre")

//CONCATENAR CADENAS DE CARACTERES

var nombrecomplete = "juan " + "erro";
console.log(nombrecomplete);

//CONSTRUIR CADENAS CON VARIABLES

var webo = "programae";
var mensaje = "estoy aprendiendo a " + webo + "con yutu";
console.log(mensaje);

//AGREGAR VARIABLES A CADENAS DE CARACTERES

var tutu = "Estoy programando ";
var final = "con yutu";
console.log(tutu);
tutu += final;
console.log(tutu);

//LONGITUD DE UNA CADENA DE CARACTERES (CUENTA CARACTERES[LEGTH])

var gt;
gt = "wewo";
console.log(gt.length);

//NOTACION DE CORCHETES: PRIMER CARACTER

var yur = "javascript";
/*
cadena: j a v a s c r i p t 
indices 0 1 2 3 4 5 6 7 8 9  ////

console.log(yur[0]);

//INMUTABILIDAD DE CADENAS DE CARTACTERES

var fd = "jola, mundo";
console.log(fd);
//   fd[0] = "h"; //error
fd = "hola mundo";
console.log(fd);

//NOTACION DE CORCHETES: ENESIMO CARACTER

var ioio = "hola mundaso"
console.log(ioio[10]);

//NOTACION DE CORCHETES: ULTIMO TEMA

var reticulo;
/*
ultimo indice es siempre la longutud - 1 pq comenxamos a contar desde 0
reticulo.length para reticulo es 8
el ultimo indice es 7
cadena: r e t i c u l o
indices:1 2 3 4 5 6 7 8
////

reticulo = "javascript";
console.log(reticulo[reticulo.length - 1]);

//NOTACOIN DE CORCHETES: DE DERECHA A IZQUIERDA

var dfs;
dfs = "javascript";
console.log(dfs[dfs.length - 2]);

//PALABRAS EN BLANCO
//son las "" sin  nada adentro para hacer espacio entre palanras

var blancos = "estudio" + dfs + " " + ioio + " " +"a la tienda";
console.log(blancos);

//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
// ARREGLOS (ARRAYS): puede agrupar cosas 

var miArreglo = ["jhon", 24];
console.log(miArreglo);
var alumnos = ["pedor" , "fran" , "pepe"];
console.log(alumnos);

//ARREGLOS ANIDADOS: arreglos dentro de arreglos

var estudiantiles = [["nora" , 94],["juan" , 23],["pedro" , 101]];
console.log (estudiantiles);

//ACCEDER A ELEMENTOS DE UN ARREGLO

var unArreglo = [10 , 20 , 30]
console.log(unArreglo[0]); //10
console.log(unArreglo[1]); //20
console.log(unArreglo[2]); //30

//MODIFICAR ELEMENTROS DE UN ARREGLO

var setsoo = [10, 20, 30]
setsoo[0] = 3243;
setsoo[1] = "juan";
setsoo[2] = [1, 2, 3];
console.log(setsoo);

//ACCEDER A ARREGLOS MULTIDIMENSIONALES: cada corchete dentro de un corchete es un indice y luego estan los indices internos

var frae = [[1, 2, 3], [4 , 5, 6], [7, 8, 9]];
console.log(frae[0][2]); // 0 es primer corchete (1 2 3) y 2 es el 3 
console.log(frae[1][0]); // 1 es el segundo corchete (4 5 6) y 0 es el 4
console.log(frae[2][1]); // 2 es el tercero (7 8 9) y 1 es 8

// .PUSH(): añade elemntos al final del arreglo

var estaciones = ["invierno" , "otoño" , "primavera"];
estaciones.push("verano");
console.log(estaciones);

// .POP(): remueve ultimo elemento del arreglo

var estacion;
estacion = ["invierno" , "otoño" , "primavera" , "verano"];
estacion.pop();
console.log(estacion);

//.SHIFT(): elimina el primero

var cosas_del_año = ["invierno" , "otoño" , "primavera" , "verano"];
cosas_del_año.shift();
console.log(cosas_del_año);

//.UNSHIFT:agrega uno al principio

tuiu = ["invierno" , "otoño" , "primavera" , "verano"];
tuiu.unshift("acabo");
console.log(tuiu);

//LISTA DE COMPRAS(fue una tarea del curso)

//cereal
var hdou = [["cereal", 3], ["galletas", 4], ["refresco", 2]]
console.log("voy a comprar " + hdou[0][1] + "unidades de " + hdou[0][0] + ".");

//galletas
console.log("voy a comprar " + hdou[1][1] + "unidades de " + hdou[1][0] + ".");

//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//FUNCION
function mostrarMensaje() {
    console.log("hola muundo");
}

mostrarMensaje();

//ARGUMENTOS
function sumacion(a, b){
var sumacion = a + b; 
console.log("el resultado de " + a +  "+" + b + " es: " + sumacion);
}
sumacion(5, 3);
sumacion(43, 43534);

var x = 43;
var yt = 32;
sumacion(x, yt);

//AMBITO GLOBAL

var miVariableGlobo = 34;
console.log(miVariableGlobo);

function miFuncion(){
    console.log(miVariableGlobo)
}
console.log(miVariableGlobo);
miFuncion();
miFuncion();

//AMBITO LOCAL: declarar variable dentro de una funcion puede ser usada solo dentro de la funcion

function funcion1() {
    var funcionlocal1 = 32123;
    console.log(funcionlocal1)
}
//funcionlocal1();

//AMBITO GLOBAL VS AMBITO LOCAL
var minombre1 = "david";
function mostrarnombre(){
    var minombre1 = "juan";
    console.log(minombre1);
}
console.log(minombre1);
mostrarnombre();

//RETORNAR UN VALOR

function sumar1(a, b){
    return a + b;
}
console.log(sumar1(43, 34));

//UNDEFINED

function sumar2(a, b){
    console.log(a + b);
    
}
console.log(sumar2(32, 4524));

//ASIGNAR UN VALOR RETORNADO

function sumar3(a, b) {
    return a + b;
}
sumar3(32, 23);
var  resultado1 = sumar3(32, 23);
console.log(resultado1);

function crear_cadena_con_meta(lenguaje_de_programacion){
    return "mi meta es aprender " + lenguaje_de_programacion;
}
var mimMeta = crear_cadena_con_meta("javascript");
console.log(mimMeta);

//PERMANECE EN FILA(tarea del curso(se agrega el JSON.stringify))

function proximo_en_fila(arreglo, elemento){
    arreglo.push(elemento); //agregar al final del arreglo
    return arreglo.shift();        //sacar el primer elemento
}

var mi_arreglo =[1, 2, 3, 4, 5];
console.log ("antes: " + JSON.stringify(mi_arreglo));
console.log(proximo_en_fila(mi_arreglo, 6));
console.log ("despues: " + JSON.stringify(mi_arreglo));

//______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________--------
//VALORES BOOLEANOS

console.log(true);
console.log(false);

//OPERADOR D IGUALDAD

console.log(54 == 54);
console.log(23==33);
console.log("hy"=="hy");
console.log("HY"=="hy");
console.log([1, 2, 3]==[1, 2, 3]); //no se hace cn arreglos

//OPERADOR DE IGUALDAD ESTRICTA

console.log(9 == 9); //true
console.log(9 == "9");
console.log(9 === "9");//false
console.log(9 === 9); //true

//PRACTICA COMO USAR IGUALDAD E IGUALDAD ESTRICATA

var a1;
var b1;
a1 = 5;
b1 = 5;
console.log(a == b); //true
console.log(a === b); // true
b1 = 8;
console.log(a1 == b1)//false
console.log(a1 === b1)//false
b1 = "5"
console.log(a1 == b1); //true
console.log(a1 === b1)//false

//OPERADOR DE DESIGUALDAD

console.log(9 != 6);//true
console.log(9 != 9);//false
//lo mismo cn los valores q estan entre comilas, es lo diferente a el otro operador de igualdad, no cn arreglos

//DESIGUALDAD ESTRICTA

console.log(1 != "1");//false
console.log(1 !== "1");//true

//OPERADOR MAYOR QUE

console.log(324>232);//true
console.log(2>32);//false
console.log("B" > "A"); //true
console.log("ABC" > "AB");//true
//si comparamos palabras, lo hara alfabetucamente, a es la mas chica y z la mas grande funciona cn variables

//MAYOR O IGUAL QUE

console.log(5 > 5 ); // false
console.log(5 >= 5); // true

//MENOR QUE

console.log (5 < 6);//true
console.log(10 < 3);//false
console.log("a" < "b");//true
console.log("abc" < "acb");//true
//funciona cn variables

//MENOR O IGUAL QUE

console.log(5 < 5);// flase
console.log(5 <= 5);// true

//OPERADOR LOGICO "AND"

/*   
    Para: X && Y
x  y  x && y
t  t    t
f  t    f
t  f    f
f  f    f 
   La expresión solo es verdadera cuando ambos operandos
   son verdaderos.
 /

   console.log(true && true);
   console.log(true && false);
   console.log(false && true);
   console.log(false && false);
a = 7
console.log((a > 5) && (a < 10));
console.log((a > 7) && (a < 10));

//OPERADOR "OR"

//console.log(true||true);
//console.log(true||false);
//console.log(false||true);}
//console.log(false||false);

//este operasdor indica true si es q uno de los valores es true

//OPERADOR LOGICO "NOT": invierte los valores, si es q es true, dara false y al reves

console.log(!true); //false
console.log(!false); //true
a2 = 8 ;
console.log(!(a > 5));

//__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//SENTENCIAS CONDICIONALES

var x1 = 3;
if (x1 == 3); {
 console.log("la condicion es pro");
}
var estacion1 = "inverno";
if (estacion1 == "invierno");{
    console.log("verano>");
}

//CLAUSULA "ELSE"

if (true){
    console.log("verdadero");
} else {
    console.log("falso");
}
var x2 = 5;
if (x < 2){
    console.log("verdadeera");
} else {
    console.log("falsa");
}

// ELSE IF

function clsificarvalor(valor){
    if (valor % 2 == 0){
    console.log("divisible em 2");
    } else if  (valor % 3 == 0){
        console.log("divisible en 3");
} else {
    console.log("no divisible")
}}

clsificarvalor(7);

//ORDEN LOGICO

function clasificarvalor (valor1) {
    if (valor1 < 5) {
    console.log("menir q 5");
} else if (valor1 < 10){
    console.log("menor q 10");
} else {
    console.log("mayor o igual q 10");
 }}

 clasificarvalor(23);

 //ENCADENAR SENTENCIAS "IF...ELSE"

 function masa(gordo) {
    if (gordo < 18) {
        console.log("flaco");
    } else if (gordo <= 25) {
        console.log("normal");
  }  else if (gordo <= 30){
  console.log("obeso"); 
    } else {
    console.log("muy gordete");
    }
}
masa(54);

//CODIGO DE GOLF

function golfo(par, golpe){
    if (golpe == 1){
    return "hole in one";
 } else if (golpe <= par - 2){
    return "eagle";
 } else if (golpe == par){
    return "par";
 } else if (golpe == par + 1){
    return "bogey";
 } else if (golpe == par + 2){
    return "doble bogey";
 } else if (golpe >= par + 3){
    return "go home";
 }
}

console.log(golfo(5, 9));

//_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//SENTENCIAS SWITCH

function valor2(valor3) {
    var respuesta;
    switch (valor3) {
    case 1:
     respuesta = "alpha";
    break;
    case 2:
        respuesta = "beta";
    break;
    case 3:
        respuesta = "gama";
    break;
    case 4:
        respuesta = "delta";
    break;
    }
    return respuesta;
}

console.log(valor2(1));

var producto1 = "pizza";
switch (producto1) {
 case "pizza" :
        console.log("sale 3 pesos");
        break;
 case "hamburguesa":
        console.log("salen 5 pesos")
        break;
 case "helado" :
        console.log("sale 2 pesos")
        break;
}
console.log("luego de switch");

//SENTENCIAS DE SWITCH : OPCION PREDETERMINADA

function idioma(valor4) {
    var idioma;
    switch (valor4){
    case 1:
           idioma = "español";
    break;
    case 2:
           idioma = "frances";
    break;
    case 3:
           idioma = "ingles"; 
    break;
    default:
            idioma = "italiano";
    break;
    }
    return idioma;
}
console.log(idioma(2));

//MULTIPLES CASOS

function volumen(valor5) {
  var volumen;
  switch (valor5) {
    case 1:
        volumen = "bajo";
    break;
    case 2:
    case 3:
        volumen = "medio";
    break;
    case 4:
    case 5:
    case 6:
        volumen = "alto";
    break;
  }
  return volumen
}

console.log(volumen(3))

//REMPLAZAR IF ELSE X SWITCH: cambiar los else if por case y !NO OLVIDAR BREAK¡

//RETORNAR VALORES BOOLEANOS

function menorq(a, b) {
return a < b;    
}
console.log(menorq(3,3))

//PATRON DE RETORNO 

function mifuncion1() {
    console.log("hola");
    return " mundo";
    console.log("adios");
}
console.log(mifuncion1());

function calcular(num) {
    if (num < 0){
        return undefined;
    }
    return Math.sqrt(num);
}
console.log(calcular(-25));

//CARTAS

var conteo = 0;
function contar(cartas) {
    var decision;

    switch(cartas){
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
        conteo++;
        break;
     case 10:
     case "j":
     case "k":
     case "a":
     case "q":
        conteo--;
     break;
    }
    if (conteo > 0){
        decision = "apostar";
    } else {
        decision = "esperar";
    }
    return conteo + " " + decision;
}
console.log(contar(2));
console.log(contar(3));
console.log(contar(7));
console.log(contar("k"));
console.log(contar("a"));

//_________________________________________________________________________________________________________________________________________________________________________________________________________
//CREAR OBJETOS

var miperro1 = {
    "nombre" : "oso",
    "edad" : 5,
    "peso" : 6,
    "raza" : "caniche",
};

//acceder a propiedas : notacion de punto

var Miperro = {
    "nombre" : "oso",
    "edad" : 5,
    "peso" : 6,
    "raza" : "caniche"
};
console.log(Miperro.nombre);

//ACCEDER A PROPIEDADES: NOTACION DE CORCHETES

var cuaderno = {
    "coloer" : "verde",
    "categoria" : "3",
    "paginas en total" : "374452737",
};
console.log(cuaderno.coloer);
console.log(cuaderno["paginas en total"]);

//ACCEDER A PROPIEDADES : VARIABLES

var resultado2 = {
    1: "loro777",
    2: "yo",
    3: "luzHumaran",
};
var posicion = 2;
console.log(resultado2 [posicion]);

//ACTUALIZAR PROPIEDADES

var mochila = {
    "color" : "azul",
    "tamaño" : "grande",
    "contenido" : ["botella, libro, cuaderno"]
};
console.log(mochila.color);
mochila.color = "verde";
console.log(mochila.color);
mochila.contenido.push("lapices");
console.log(mochila.contenido);

//AGREGAR PROPIEDADES 

var curso1 = {
    "titulo" : "aprende javascript",
    "idioma" : "español",
    "duracion" : "30",
};
console.log(curso1.vistas);
curso1.vistas = 437874; //funciona cn corchetes
console.log(curso1.vistas);

//ELIMINAR PROPIEDADES

var curso1 = {
    "titulo" : "aprende javascript",
    "idioma" : "español",
    "duracion" : "30",
};
delete curso1.duracion;
console.log(curso1);

//OBJETPOS PARA BUSQUEDAS

function elementquim(simbolo){
var quimica = {
    "al" : "aluminio",
    "au" : "oro",
    "s" : "azufre",
    "he" : "helio",
    "b" : "boro"
  };
return quimica[simbolo];
}
console.log(elementquim("al"));
console.log(elementquim("au"));
console.log(elementquim("s"));
console.log(elementquim("he"));
console.log(elementquim("b"));

//VERIFICAR PROPIEDADES

var cuaderno1 = {
    "coloer" : "verde",
"categoria" : "3",
"precio" : "374452737"
};
console.log(cuaderno1.hasOwnProperty("coloer"));
console.log(cuaderno1.hasOwnProperty("orientacion"));

function propiedad1(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)){
        return "prodpiedad: "+ obj[propiedad]
    } else {
        return "no tiene esta propiedad";
    }
}
console.log(propiedad1(cuaderno1, "origen"))

//OBJETOS COMPLEJOS

var pizzza = [
    {
    "tipo" : "4 quesos",
    "tamaño" : "grande",
    "precio" : "32847327468324328748",
    "agregados" : [
        "+ quese",
        "champiniones" 
    ],
    "para llevar" : true
},
{
    "tipo" : "23 quesos",
    "tamaño" : "muy grande",
    "precio" : "3284999999999999999999999999999999999987657327468324328748",
    "agregados" : [
        "+ + masa",
        "Hongos" 
    ],
    "para llevar" : false
},
{
    "tipo" : "napo",
    "tamaño" : "chica",
    "precio" : "3247625762437842398753475893465738490523465893475897438756792408570732459048767548937597346509834765"
}
];
console.log(pizzza[0].tipo);
console.log(pizzza[1].tipo);
console.log(pizzza[2].tipo);

//OBJETOS ANIDADOS

var receta = {
    "descripcion" : "mi postre fav",
    "costo" : "3264734 pesos",
    "ingredientes" : {
        "masa" : {
        "harina" : "100gr",
        "leche" : "10ml",
        "sal" : "67 gr"
    },
    "cobertura" : {
        "azucar" : "120 gr",
        "chocolate" : "437 kilos"
    }
  }
};
console.log(receta.ingredientes.masa.harina);
console.log(receta.ingredientes.masa["agua"]);
console.log(receta.ingredientes["cobertura"].azucar);

//ARREGLOS ANIDADOS

var plantas = [
    {
        tipo : "flores", 
        lista : [
            "rosas",
            "tupilan",
            "margaritas"
        ]
    },
    {
        tipo : "arboles"[
            "abedul",
            "roble",
            "pino"
        ]
    }
];
var primeraFlor = plantas[0].lista[0];
console.log(primeraFlor);

//COLECCION DE DISCOS


var discos = {
    78563 :{
        titulo1 : "loco",
        de : "bad bunny",
        canciones : ["lo sienot bebe"]
    },
    5647657: {
        titulo1: "homerun"
    }
}
function discospro(discos, id , propiedad, valor) {
if (valor === "") {
    delete discos[id][propiedad];
} else if (propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
} else {
    discos[id][propiedad] = valor;
}
}
console.log(discos, [5647657].de);
discospro(discos, 5647657, "artista", "bad bunny");
console.log(discos[5647657].artista);

//______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//CICLO WHILE

var tuj = 0
while (tuj <= 3) {
   console.log("holanda");
    tuj++;
}
var arreglo1 = [];

var jhjh;
var j;
console.log(arreglo1);
while (j <= 10) {
    arreglo1.push(arreglo1);
    j++;
}
console.log(arreglo1);

var numeros1 = [1, 2, 3, 4, 458]
while (numeros1 > 4); {
    numeros1.pop();
}
console.log(numeros1);

// CICLO FOR

var arreglo2 = []
for (var yut = 0; yut < 10; yut++) {
 arreglo2.push(yut);
}
console.log(arreglo2);

//FOR: NUMEROS IMPARES

var arerglo3 = [];
for (var i = 1; i <20; i += 2) {
    arerglo3.push(i);
}
console.log(arerglo3);

//FOR: CONTAR PARA ATRAS
for (var ff = 15; ff >= 10; ff -= 2) {
    console.log(ff);
}

var arreglo4 = [];
for (var d = 10; d > 0; d -= 2) {
    arreglo4.push(d);
}
console.log(arreglo4);

//ITERAR SOBRE UN ARREGLO CON UN CICLO FOR

var g1 = [4, 6, 8, 2];
var total1 = 0;

for (var w = 0; w < g1.length; w++) {
    console.log("iteracion " + w);
    console.log(g1[w]);
total1 += g1[w];
}
console.log(total1);

var lenguajes = ["java", "javascript", "phytion"];
for (var q1 = 0; q1 < lenguajes.length; q1++) {
    console.log(lenguajes[q1].toUpperCase());
}

//CICCLO FOR ANIDADO

var arreglo5 =[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
/*
for (var q2 = 0; q2 < arreglo5.length; q2++) {
    var arregloAnidado = arreglo5[q2]; //arreglo
    for (var j1 = 0; j1 < arregloAnidado.length; j++){
        console.log(arregloAnidado[j1]); //elemento
    }
}
*/

//CICLO DO WHILE
/*
var x3;
x3 = 16;
while (x3 < 10) {
    console.log(x3);
    x3++;
}

do {
    console.log(x3);
    x3++
} while (x3 < 10);

//BUSQUEDA DE PERFIL

var contactos = [
{
    "nombre" : "nora",
    "apellido" : "nav",
    "numero" : "4382785",
    "gustos" : ["pizza", "fortite"]
},
{
    "nombre" : "harry",
    "apellido" : "potter",
    "nuimero" : "365473264",
    "gustos" : ["hamburguesa", "lol"]
},
 {
    "nombre" : "lara",
    "apellido" : "croft",
    "numero" : "746777777",
    "gustos" : ["panchos", "friv"]
 }  
];

function buscarPerfil (nombre, propiedad) 
{  for (var i3 = 0; i3 < contactos.length; i3++){
        if (contactos [i3].nombre === nombre) {
            return contactos[i3][propiedad] || "la propiedad npo existe"
        }
     }
     return "el contacto no esta en la lisra";
}
console.log(buscarPerfil("nora", "gustos"));

//NUMEROS ALEATORIOS

function fraccion() {
    return Math.random();
}
console.log(fraccion());
console.log(fraccion());
console.log(fraccion());
console.log(fraccion());
console.log(Math.random());
var aleatorio = Math.random;

//ALEATORIO PERO ANTEROS

var numAleatorio = Math.floor(Math.random()*20);
console.log(numAleatorio);
function numEntero (limiteSuperior) {
    return Math.floor(Math.random()*limiteSuperior);
}

for(var i4 = 0; i4 < 15; i4++) {
    console.log(numEntero(5));
}

console.log(numEntero(5));
console.log(numEntero(5));
console.log(numEntero(5));
console.log(numEntero(5));

//NUM ENTEROS ALEATORIOS EN UN RANGO

function rangoAleatorio(limiteInferior, limiteBetter) {
    return Math.floor(Math.random() * (limiteBetter - limiteInferior + 1)) + limiteInferior;
}
console.log(rangoAleatorio(3, 8));
console.log(rangoAleatorio(3, 8));
console.log(rangoAleatorio(3, 8));
console.log(rangoAleatorio(3, 8));

//FUNCION PARSEINT(): no letras

console.log(parseInt("5"));
var a98 = parseInt("4");
var b98 = parseInt("9");
console.log (a98 + b98);

//parceInt CON BASE

console.log(parseInt("3E0A", 16));

//OPERADOR CONDICIONAL TERNARIO

function retornarr(x32, y32) {
    return x32 < y32 ? x32 : y32;
}
console.log(retornarr(5, 8));
console.log(retornarr(3, 7));
console.log(retornarr(4, 9));
console.log(retornarr(1, 6));

//MULTIPLES CONDICIONALES

function comparar21(a21, b21) {
    if (a21 == b21) {
        return "a y b son iguales";
    }else if (a21 > b21) {
        return "a es mayor q b";
    }else {
        return "b es mayor q a";
    }
}
//esto es lo mismo q hacer:
function comparar22(a22, b22) {
    return a22 == b22 ? "a y b son iguales"
    : a22 > b22 ? "a es mayot q b"
    : "b es mayor q a";
}
console.log(comparar22(11, 11));

//VAR VS LET : LET SOLO SE PUEDE USAR UNA VEZ

var campista = "james";
var campista = "david";
console.log(campista);

//let campista = "juan";
//let campista = "joni";

//AMBITO VAR VS LET

var variable1312 = 4;
console.log(variable1312);
function miFuncion1213() {
    console.log(variable1312);

    var variableLocal = 9;
    console.log(variableLocal)
}
miFuncion1213();
console.log(variable1312);
//console.log(variableLocal);//error 

for (var i32 = 0; i32 < 3; i32++) {
    console.log(i32);
}
console.log("variable " + i32);

//for (let i32 = 0; i32 < 3; i32++) {
//    console.log(i32);
//}
//console.log("variable " + i32);
//LET ES SOLO PARA COSAS EN UNA MISMA COSA, SI LO HACES EN UN CONDICIONAL ES LO MISMO, SOLO SE USA EN UN BLOQUE DE CODIGO, NO ES GLOBAL

//CONST : no se cambia, no se modifica

const miconst = 34;
console.log(miconst);
//miconst = 3232;

function calcularArea(radio) {
    const PI = 3.14;

    if (radio < 0) { 
    return undefinedd;
    }
    return PI *(radio**2);
}
console.log(calcularArea(10));

//MUTAR ARREGLO DECLARADO OCN CONST

const Arregloo = [1, 2, 3, 4];
Arregloo[0] = 5;
Arregloo[1] = 6;
Arregloo[2] = 7;
Arregloo[3] = 8;
console.log(Arregloo);

//CREAR OBJETO INMUTABLE: es para q no se cambie nada del codigo, NADA.
                               
let coloree = {
    "verde" : "#432i32",
    "rojo" : "#ejdnwjf",
    "blanco" : "#7777777",
    "negro" : "ffffffffffff"
};
Object.freeze(coloree);

//FUNCIONES FLECHA

const fechasa = () => new Date();

//FUNCIONES FLECHAS CN PARAMETROS

const sumaTres = (x212) => x212 + 3;
console.log(sumaTres(4));
const concateneo = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(concateneo([1, 2], [3, 4, 5]))
//es lo mismo q :
const concateneoi = (arr3, arr4) => arr3.concat(arr4);
console.log(concateneoi([1, 2], [3, 4, 5]))

//VALORES POR DEFECTOS PARA PARAMETROS

const incremento = (num, valor = 1) => num + valor;
console.log(incremento(5));
console.log(incremento(5, 3));

//OPERADOR REST: ...

function mifuncioncita(...args) {
    console.log(args.length);
}
mifuncioncita(1, 2, 3, 4);

const sumation = (x980, y980, z980) => {
    const argss = [x980, y980, z980];
    return argss.reduce((a980, b980) => a980 + b980, 0)
};
//lo mismo q:
const sumation1 = (...args) => {
    return argss.reduce((a980, b980) => a980 + b980, 0)
};

//OPERADOR SPREAD

const numeacos = [1, 2, 3];

function sumomi(x, y, z) {
    return x + y + z;
}
console.log(sumomi(...numeacos));

//SINTAXIS DE DESECTRUCTURACION

const user = {
    nombre1: "gino pit",
    edad1: 34
};
const nombre1 = user.nombre1;
const edad1 = user.edad1;
const{nombre, edad} = user;

//LO MISMO PERO CN OJBETOS ANIDADOS

const user1 = {
    jhon: {
        edaddd: 27,
        correo: "jhon@gmail.com"
    }
};
const {jhon: {edaddd: tiempoDeVida, correo: googleGmail}} = user1;
console.log(tiempoDeVida);
console.log(googleGmail);

const pronostico_local = {
    "ayer": {
        minima: 61,
        maxima: 44
    },
    "hoy": { 
    minima: 65,
    maxima: 90
    },
    "mañama": {
    minima : 2,
    maxima : 3
    }
};
const {hoy: {minima: minimaHoy}} = pronostico_local
console.log(minimaHoy);

//LO MISMO PERO CN ARREGLOS

var a24;
var b24;
var c24;

[a, b,,, c] = [1, 2, 3, 4, 5, 6];

console.log(a24);
console.log(b24);
console.log(c24);

var a25 = 8;
var b25 = 6;
[b25, a25] = [a25, b25];
console.log("a25 :" + a25);
console.log("b25: " + b25)
 
//LO MISMO CN EL OPERADOR REST

var a26;
var b26;
var arr5;
[a26, b26, ... arr5] = [1, 2, 3, 4, 5, 6, 7];
console.log(a26);
console.log(b26);
console.log(arr5);

//LO MISMO PERO PASAR OBJETO COMO ARGUMENTO

var newprofile = {
    nombre2: "jana",
    edad2: 23,
    nacion: "españa",
    ubication: "españa"
};
const actualizara = ({nombre2, edad2, ubication, nacion}) => {
    console.log(nombre2);
    console.log(edad2);
    console.log(ubication);
    console.log(nacion);
};
actualizara(newprofile);

//_____________________________________________________________________________________________________________________________________________________________________________________
//PLANTILLAS LITERALES


var a26 = 6;
console.log(`el valor de a es ${a26}`);

var nombres = "nora";
var edadde = 6;
console.log(`mi nombre es ${nombres} y tengo ${edadde} años.`)

var aregloe = [1, 2, 3, 4];
console.log(`el arreglo es ${JSON.stringify(aregloe)}`);

var persona = {
    nombre: "gimo",
    edad3: 10
};
const SALUDO = `hola mi nombre es ${persona.nombre} y tengo ${persona.edad3} años.`;
console.log(SALUDO);

//____________________________________________________________________________________________________________________________________________________________________________________________________
//CREAR OBJETOS DE FORMA CONCISA

const creoPersona = (nombre4, edad4, idioma) => {
    return {
        nombre: nombre4,
        edad: edad4,
        idioma: idioma
    };
};
console.log(creoPersona("gino", 28, "espanish"));
//lo mismo q
const creoPersonaa = (nombre4, edad4, idioma) => ({nombre4, edad4, idioma});
console.log(creoPersona("gino", 28, "espanish"));

//METODOS
 
const personaa = {
    nombre: "isabel",
    presentarse: function() {
        return `hola, mi nombre es ${this.nombre}.`;
    }
};
console.log(personaa.presentarse());
//lo mismo q:
const personaaa = {
    nombre: "isabel",
    presentarse() {
        return `hola, mi nombre es ${this.nombre}.`;
    }
};
console.log(personaaa.presentarse());

//DEFINIR CLASE

class transbordadorespacial {
    constructor(planeta) {
     this.planeta = planeta;
    }
}
var zeus = new transbordadorespacial("jupiter");
console.log(zeus.planeta);
var apolo = new transbordadorespacial("marte");
console.log(apolo.planeta);

class mascota {
    constructor(nombre5, edad5) {
        this.nombre5 = nombre5;
        this.edad5 = edad5;
    }
}
var miMascotita = new mascota("nora", 5);
console.log(miMascotita.edad5);
console.log(miMascotita.nombre5);
*/
//GATTERS Y SETTERS

class librooo {
    constructor(autor) {
        this._autor = autor;
    }
   get autor() {
    return this._autor;
   }
   set autor(nuevoAutor) {
    this._ = nuevoAutor;
   }
}
const libroo = new librooo("anonimo");
console.log(libroo.autor);
libroo.autor = "gino";

function (sexo){
    if (3 === 3)
    console.log("mostrame perro")
    else (4>374563546)
    return "holanda"
}