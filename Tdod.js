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

/* Sample code for the functioning of findIndex it accepts a function 
* input and returns the desired index
*/

let getIndex = function(act, testDay){
    return Index = act.findIndex(function(data, nDay){
        if(data.Day === testDay)
            return data;
    });
};

const printClass = getIndex(dayAct, 'Tuesday');
console.log(printClass);

console.log("##########################");

/* Sample code for the functioning of find it accepts a function 
* input and returns object related to it
*/

let getClass = function(act, testDay){
    return shit = act.find(function(data, nDay){
        if(data.Day.toLowerCase() === testDay.toLowerCase())
            return data.class;
    });
}

const gotCLass = getClass(dayAct, 'Wednesday');
console.log(gotCLass.class);





