//alert( "I'm JavaScript!" );
let message;
message = 'Hello!';

alert(message);

let message = 'Hello1111!'; // define the variable and assign the value

alert(message); // Hello!

let message;

message = 'Hello2!';

message = 'World2!'; // value changed

alert(message);

let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared


let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color);


const pageLoadTime = 5;
