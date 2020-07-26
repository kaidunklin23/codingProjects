function returnword () {
    return 'word';
}
var myword = returnword();

function returnArgument(argumentOne){
    return argumentOne;
}

console.log(returnArgument('hello'));

console.log(returnArgument('chicken'));

console.log(returnArgument('nugget'));

console.log(returnArgument(['one', 'two', 'three']));

console.log(returnArgument('200'));

console.log(returnArgument('food'));

console.log(returnArgument({name: 'Kaija'}));

console.log(returnArgument({age: 18}));

console.log(returnArgument({height: '5ft4in'}));

function greet(hello,name) {
    return hello + " "+ name;
}

var name = "kaija";
var hello = "hola";

console.log(greet(name,hello));

function greet2(greeting,name2) {
    return greeting + " " + name2;
}
console.log(greet('Hi','Auntie'));
console.log(greet('Hola','Uncle'));
console.log(greet('Howdy','Raja'));
console.log(greet('Greetings','Kaija'));
console.log(greet('Konichiwa', 'Leila'));
console.log(greet('Salutations', 'Amina'));
console.log(greet('Wyd', 'Jesus'));
console.log(greet('How are you','Mom'));
console.log(greet('Hey','Dad'));
console.log(greet('Wassup', 'Keyon'));