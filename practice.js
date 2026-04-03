// =============================
// 1. VARIABLES & OPERATORS
// =============================
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);


// =============================
// 2. DATATYPES
// =============================
let name = "Sukesh";
let age = 21;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);


// =============================
// 3. CONDITIONAL STATEMENT
// =============================
let marks = 75;

if (marks >= 50) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}


// =============================
// 4. SWITCH CASE
// =============================
let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}


// =============================
// 5. FOR LOOP
// =============================
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}


// =============================
// 6. BREAK & CONTINUE
// =============================
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    if (i === 5) break;
    console.log("Value:", i);
}


// =============================
// 7. FUNCTIONS
// =============================
function greet(user) {
    console.log("Hello " + user);
}

greet("Sukesh");


// =============================
// 8. FUNCTION - AVERAGE
// =============================
function average(x, y, z) {
    return (x + y + z) / 3;
}

console.log("Average:", average(10, 20, 30));


// =============================
// 9. ARRAYS BASIC
// =============================
let arr = [10, 20, 30];

console.log("Array:", arr);
console.log("First element:", arr[0]);


// =============================
// 10. ARRAY METHODS
// =============================
arr.push(40);
console.log("After push:", arr);

arr.pop();
console.log("After pop:", arr);

arr.unshift(5);
console.log("After unshift:", arr);

arr.shift();
console.log("After shift:", arr);


// =============================
// 11. SLICE & SPLICE
// =============================
let nums = [1, 2, 3, 4, 5];

console.log("Slice:", nums.slice(1, 3));

nums.splice(2, 1);
console.log("After splice:", nums);