console.log(2 == "2");
//true
console.log(2 === "2");
//false
console.log(2 == 2.0)
//true
console.log(2 === 2.0);
//true
console.log('' == '')
//true
console.log('' === '')
//true

let myVar = {a: 1}

let ano = {a: 1}

console.log(myVar == ano)
//false
console.log(myVar === ano)
//false
//answer is false as both the objects are not same

console.log(myVar.a == ano.a)
//true

console.log(myVar.a === ano.a)
//true

console.log({} == {});//false

console.log({} === {});//false

//In case of objects === checks for the same object



