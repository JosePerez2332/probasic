//4 fFORMAS DE MOSTRAR CONTENIDO
//(1) Alert
// alert("HOLA BIENVENIDO");
//(2)La consola
console.log("HOLA BIENVENIDO")
//(3) Libreria SweetAlert2
// Swal.fire("Hola desde SweetAlert2");
//(4)en el DOM=> Modelo de Objetos del Documento
document.write("Hola desde el dom")

// #### TIPOS DE VARIABLES
var edad = 27; // alcance global
let num =27; //alcance de bloque
const nombre = "Jose Perez"; // no cambia su valor
const pi = 3.14; // no cambia su valor
const pulgada = 2.54; //no cambia su valor

// #### OPERADORES BASICOS
// Aritmeticos (+,-)
var num_uno = 5;
var num_dos = 10;
console.log(num_dos + num_uno);
console.log(num_dos - num_uno);
console.log(num_dos * num_uno);
console.log(num_dos / num_uno);
console.log(num_dos % num_uno);


// Comparación
console.log("Igual >>> " + (num_dos==num_dos))
console.log("Estricto Igual >>> " + (num_dos==num_dos))
console.log("Diferente >>> " + (num_dos!=num_dos))
console.log("Mayor >>> " + (num_dos>num_dos))
console.log("Mayor Igual >>> " + (num_dos>=num_dos))
console.log("Menor >>> " + (num_dos<num_dos))
console.log("Menor Igual>>> " + (num_dos<=num_dos))

// #### TIPOS DE DATOS
var clase = "Prog. basica"; // String
var numero = 5; // Numero entero
var decimal = 2.5; // Numero decimal
var booleano = true; // Boolean (false/true)
var objeto = {nombre: "Jose ", edad: 33, profesion: "Estudiante"};
var array = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
var array_num = [1,2,3,4,5,6,7,8,9];
var array_mix = [1, "uno",20,"fiesta",2.5,"decimal"];
let estudiantes = [
    {nombre: "Wilder", edad: 33},
    {nombre: "Anyi", edad: 34},
    {nombre: "Celeste", edad: 4},
    {nombre: "Antonella", edad: 3},
    {nombre: "Wilder", edad: 0},
];

let curso = {
    nombre: "Programación",
    temas: ["HTML", "CSS", "JS"]
};

console.log(objeto);
console.log(objeto.nombre);
console.log(array);
console.log(array[3]);
console.log(estudiantes);
console.log(estudiantes[1]);
console.log(estudiantes[2].nombre);
console.log(curso);
console.log(curso.temas);
console.log(curso.temas[1]);




