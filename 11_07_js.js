// const a=20n;
// {
//     let b;
//     console.log("inner",b); // inner undefined
//     console.log("type",typeof(b)); // type undefined
// }
// console.log("outer",a); // outer 20n
// console.log("type",typeof(a)); // type bigint

function async(){
    console.log("hii from anmed func"); // hii from anmed func
    console.log(this); // Logs the context in which the function is called
}
const myfunc2=function(){
    console.log("I am affected by hoisting"); // I am affected by hoisting
}
const outerfunction=()=>{
    let a="i am in outerfunction";
    const innerfunction=()=>{
        console.log(a); // i am in outerfunction
    }
    return innerfunction();
}
outerfunction();

console.log(); // Empty line
console.log(0=="0"); // true

const color=[];
color.push("Yellow");
color.unshift("Red");
console.log(color); // ["Red", "Yellow"]

// forEach
color.forEach(function(col){
    console.log(col); // Red, Yellow
})
color.pop();
for(const i of color){
    console.log(i); // Red
}

color.unshift();
const result=color.map((i) => {
    console.log(i+"12"); // Red12
})
color.unshift("tr","td");
const res2=color.filter((i) => {
    if(i.length>2){
        return i;
    }
})
console.log(res2); // ["Red", "Yellow"]

const f=color.slice(1,3);
console.log(color); // ["tr", "td", "Red"]
console.log(f); // ["td", "Red"]

const td=color.splice(0,2,"Yellow","Yellow2");
console.log(td); // ["tr", "td"]
console.log(color); // ["Yellow", "Yellow2", "Red"]

console.log("<hr>"); // <hr>

// var paraDocument = document.write("<p>hiii</p>");
for(const key of color){
    console.log(key); // Yellow, Yellow2, Red
}

const person={fname:"dinesh",fname:"gokul"};
console.log(person); // {fname: "gokul"} (duplicate keys, last one wins)
console.log(Object.keys(person)); // ["fname"]
console.log(Object.values(person)); // ["gokul"]
console.log(Object.entries(person)); // [["fname", "gokul"]]
console.log(Object.fromEntries(Object.entries(person))); // {fname: "gokul"}

const asserts=Object.entries(person).map(([key,values])=>'${key}');
console.log(person); // {fname: "gokul"}

// The three dots (...) represent the spread operator in JavaScript. 
// It allows an iterable such as an array or object to be expanded in places where zero or more arguments or elements are expected.

// Spread Operator
// The spread operator allows an iterable such as an array or object to be expanded in places where zero or more arguments or elements are expected.

// Example with Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; // Combining two arrays
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

// Example with Objects
const objA = {a: 1, b: 2};
const objB = {c: 3, d: 4};
const combinedObjA = {...objA, ...objB}; // Combining two objects
console.log(combinedObjA); // {a: 1, b: 2, c: 3, d: 4}

// Rest Operator
// The rest operator allows us to represent an indefinite number of elements as an array.

// Example with Arrays
const [first,second, ...rest] = [10, 20, 30, 40];
console.log(first);// 10
console.log(second);  //20
console.log(rest); // [20, 30, 40]

// Example with Objects
const {x, y, ...restObj} = {x: 1, y: 2, z: 3, w: 4};
console.log(x); // 1
console.log(y); // 2
console.log(restObj); // {z: 3, w: 4}

// Example with Functions
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

function multiply(multiplier, ...args) {
    return args.map(arg => arg * multiplier);
}
console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; // Using spread operator to combine arrays
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = {...obj1, ...obj2}; // Using spread operator to combine objects
console.log(combinedObj); // {a: 1, b: 2, c: 3, d: 4}

// Stringify with Array 12 :07
const array = [1, 2, 3, 4, 5];
const jsonArray = JSON.stringify(array);
console.log(jsonArray); // "[1,2,3,4,5]"

// Parse back to array
const parsedArray = JSON.parse(jsonArray);
console.log(parsedArray); // [1, 2, 3, 4, 5]

// Stringify with Object
const object = {a: 1, b: 2, c: 3};
const jsonObject = JSON.stringify(object);
console.log(jsonObject); // "{"a":1,"b":2,"c":3}"

// Parse back to object
const parsedObject = JSON.parse(jsonObject);
console.log(parsedObject); // {a: 1, b: 2, c: 3}



// The `document` object represents the entire HTML document. It is an entry point to the web page's content, allowing you to access and manipulate the DOM (Document Object Model).
// Here are some examples of how to use the `document` object:

// Accessing an element by its ID
const loginForm = document.getElementById('login-form');
console.log(loginForm);


const allInputBoxes = document.querySelectorAll('.inputBox');
console.log(allInputBoxes);

// Modifying the content of an element
const heading = document.querySelector('h2');
heading.textContent = 'Welcome Back!';

// Adding a new element to the DOM
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);

// Adding an event listener to an element
const loginButton = document.querySelector('input[type="submit"]');
loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Login button clicked!');
});

// The `object` in the DOM refers to any HTML element that can be manipulated using JavaScript. For example, a `div`, `p`, or `input` element can be considered an object in the DOM.
// Here are some examples of manipulating objects in the DOM:

// Changing the style of an object
const contentDiv = document.querySelector('.content');
contentDiv.style.backgroundColor = 'lightblue';

// Adding a class to an object
contentDiv.classList.add('highlight');

// Removing a class from an object
contentDiv.classList.remove('highlight');

// The `method` in the DOM refers to the functions that can be called on objects to perform actions or retrieve information. For example, `getElementById`, `querySelector`, and `addEventListener` are methods.
// Here are some examples of using methods in the DOM:

// Using the `getElementById` method to access an element
const formElement = document.getElementById('login-form');

// Using the `querySelector` method to access an element
const submitButton = document.querySelector('input[type="submit"]');

// Using the `addEventListener` method to add an event listener to an element
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Submit button clicked!');
});
console.log(submitButton);

function main(){
    // give add to numbers
    var a=10;
    var b=20;
    var c=a+b;
    console.log(c);
}
main();

