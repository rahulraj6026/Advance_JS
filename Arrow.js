/*This is normal declaration of a function*/
function printName(name){
    return `He is ${name}`;
}
console.log(printName('Rahul'));

/*This is how a arraow function works*/
const arrow = (name) => console.log(`He is ${name}`);

arrow('Rahul called from arrow function');

/*Object to store days and the classes to be attended */
const dayAct = [{
    Day: 'Monday',
    class: 'Yoga'
}, {
    Day: 'Tuesday',
    class: 'Dance'
}, {
    Day: 'Wednesday',
    class: 'Boxing'
}];

/* Sample code for the functioning of find it accepts a function 
* input and returns object related to it
*/

const getClass = function(act, testDay){
    return shit = act.find(function(data, nDay){
        if(data.Day.toLowerCase() === testDay.toLowerCase())
            return data.class;
    });
}

console.log(getClass(dayAct, 'Wednesday').class);

/*Same above implementation using arrow function */

const getClasss = (act, testDay) => {return act.find((data, nDay) => {
    if(data.Day.toLowerCase() === testDay.toLowerCase())
            return data.class;
    })  
};

console.log(getClasss(dayAct, 'Wednesday').class+" "+'Using arrow function');

/* Arrow function is easier to implement and makes out code readable*/

//Arrow function should not be used inside a object declaration
//Arrow function should not be used inside methods and constructor
//We need to bind it inorder to use this
//In redux we need to wrap up the key value pair in a pair of parenthesis 
//We need this to access the object variables
var testObj = {
    test1: 'value1',
    test2: 'value2',
    print: function(){
        console.log(`${this.test1}+" "+${this.test2}`);
        
    }
}
testObj.print();

//If the same thing is wriiten using arrow function

var testObj = {
    test1: 'value1',
    test2: 'value2',
    print: () =>{
        console.log(`${this.test1}+" "+${this.test2}`);
        
    }
}
testObj.print();
//undefined+" "+undefined
//We need to explicitly bind this function