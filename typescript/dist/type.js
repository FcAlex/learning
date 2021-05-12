"use strict";
// types
//boolean
var isOpen;
isOpen = true;
// isOpen = "true" // error
//string
var message;
message = "Hey man";
message = 'Hello World!';
message = "It's Ok? " + isOpen;
// number (int, float, hexadecimal, binario)
var number;
number = 5;
number = 5.5;
number = 0xff0;
// array
var items;
items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// items = ["Hey"] // Error
var total; //usando generics
total = ["Hello", "World", "!"];
// tuple
var tuple;
tuple = [20, 'age'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
    Colors["red"] = "#f00";
})(Colors || (Colors = {}));
// any (não recomendado utilizar)
var anything;
anything = "Hey";
anything = true;
anything = 15;
// void
function logger() {
    console.log("Hi!");
}
// never (indica que uma função nunca deve retornar algo)
function error() {
    throw new Error("error");
}
// object (qualquer coisa diferente dos apresentados)
// No typescript possui inferência de tipos, logo não é necessário nesses casos apresentados declarar o tipo
