/* >>>>>>>>>>>>>> Javascript >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Veriables >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> fullName is a Veriables & "Kartoa" is a Value >>>>>>>>>>>>>> */

// fullName = "Kartoa";
// console.log(typeof fullName);

/* >>>>>>>>>>>>>> let, const & var >>>>>>>>>>>>>> */

// const accountId = 1122
// let accountEmail = "abc@google.com"
// accountCity = "Islamabad"
// let accountState;
// console.table([accountId, accountEmail, accountCity, accountState])

// console.log(accountId);

/* >>>>>>>>>>>>>> 7 Data Types (Primitives in Js) >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>>
Number => 123
BigInt => Object
String => ""
Boolean => true/false
null => Object
undefined => undefined
Symbol => unique
>>>>>>>>>>>>>> */

/* >>>>>>>>>>>>>> 7 Data Types (Primitives in Js) >>>>>>>>>>>>>> */

// let a = null;
// let b = 123;
// let c = true; //can also be false
// let d = BigInt("50") + BigInt("20")
// let e = "Ali"
// let f = Symbol("I am symble")
// let g = undefined;
// console.log(a, b, c, d, e, f, g)
// console.log(typeof b)

/* >>>>>>>>>>>>>> Typeof >>>>>>>>>>>>>> */

// console.log(typeof "");
// console.log(typeof 123);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof Object);

/* >>>>>>>>>>>>>> Data Type (Non Primitives in Js) >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Object >>>>>>>>>>>>>> */

// const item = {
//     "Ali": true,
//     "Ahmed": false,
//     "Hanzala": 123,
//     "Faisal": undefined
// }
// console.log(item["Hanzala"]);
// console.log(typeof item);
// console.log(typeof item["Hanzala"]);

/* >>>>>>>>>>>>>> Data Type (Non Primitives in Js) >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Object >>>>>>>>>>>>>> */

// const student = {
//     fullName: "Ali",
//     age: 30,
//     cgpa: 8.2,
//     isPass: true,
// };
// console.log(student["fullName"]);
// console.log(student.fullName);

// student["age"] = student["age"] + 5;
// console.log(student["age"]);

// student["name"] = "Ahmed";
// console.log(student["name"]);

/* >>>>>>>>>>>>>> Important Function >>>>>>>>>>>>>> */

// console.log("wooqlaw.com");
// document.write("wellcome");
// alert("Kartoa");
// prompt("Kartoa","Your Comments Here");
// confirm("Login");

/* >>>>>>>>>>>>>> Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> 1-Artimetic Operators >>>>>>>>>>>>>> */
 
// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a / b = ", a / b);
// console.log("a * b = ", a * b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

/* >>>>>>>>>>>>>> Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> 1-Artimetic Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Increment - Decrement >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Unary Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> a = a + 1 or shortcut a++ >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// a = a + 1;
// console.log("a = ", a);

/* >>>>>>>>>>>>>> a = a + 1 or shortcut a++ >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> shortcut a++ >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// a++;
// console.log("a = ", a);

/* >>>>>>>>>>>>>> a = a - 1 or shortcut a-- >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// a = a - 1;
// console.log("a = ", a);

/* >>>>>>>>>>>>>> a = a - 1 or shortcut a-- >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> shortcut a-- >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// a--;
// console.log("a = ", a);

/* >>>>>>>>>>>>>> a++ >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// console.log("a++ = ", a++);
// console.log("a = ", a);

/* >>>>>>>>>>>>>> ++a >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// console.log("++a = ", ++a);
// console.log("a = ", a);

/* >>>>>>>>>>>>>> a-- >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// console.log("a-- = ", a--);
// console.log("a = ", a);

/* >>>>>>>>>>>>>> --a >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// console.log("--a = ", --a);
// console.log("a = ", a);

/* >>>>>>>>>>>>>> Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> 2-Asignment Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> a += 4; a -= 4; a *= 4; a /= 4; a %= 4; a **= 4; >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// a += 4;
// console.log("a = ", a);

/* >>>>>>>>>>>>>> 3-Comparison Operators >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// console.log("5 == 2", a == b);
// console.log("5 != 2", a != b);
// console.log("5 === 2", a === b);
// console.log("5 !== 2", a !== b);
// console.log("5 > 2", a > b);
// console.log("5 < 2", a < b);

/* >>>>>>>>>>>>>> 1st "5" string to convert in -> number >>>>>>>>>>>>>> */

// let a = 5;
// let b = "5";

// console.log("a == b", a == b);
// console.log("a === b", a === b);
// console.log("a !== b", a !== b);

/* >>>>>>>>>>>>>> 5 >= 5 , 5 <= 5 >>>>>>>>>>>>>> */

// let a = 5;
// let b = 5;

// console.log("5 >= 5", a >= b);
// console.log("5 <= 5", a <= b);

/* >>>>>>>>>>>>>> 4-Logical Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> ( && ) >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> let cond1 = a > b , let cond2 = a === 6 >>>>>>>>>>>>>> */

// let a = 6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a === 6;
// console.log("cond1 && cond2 = ", cond1 && cond2);

/* >>>>>>>>>>>>>> let cond1 = a > b , let cond2 = a === 4 >>>>>>>>>>>>>> */

// let a = 6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a === 4;
// console.log("cond1 && cond2 = ", cond1 && cond2);

/* >>>>>>>>>>>>>> let cond1 = a < b , let cond2 = a === 6 >>>>>>>>>>>>>> */

// let a = 6;
// let b = 5;

// let cond1 = a < b;
// let cond2 = a === 6;
// console.log("cond1 && cond2 = ", cond1 && cond2);

/* >>>>>>>>>>>>>> let cond1 = a < b , let cond2 = a === 6 >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> or shortcut >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> a < b && a === 6 >>>>>>>>>>>>>> */

// let a = 6;
// let b = 5;

// console.log("cond1 && cond2 = ", a < b && a === 6);

/* >>>>>>>>>>>>>> 4-Logical Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> ( || ) Pipe Sign -> || >>>>>>>>>>>>>> */

// let a = 6;
// let b = 5;

// console.log("cond1 || cond2 = ", a < b || a === 6);

/* >>>>>>>>>>>>>> 4-Logical Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> ( ! ) true to false and false to true >>>>>>>>>>>>>> */

// let a = 6;
// let b = 5;

// console.log("!(6<5) = ", !(a < b));
// console.log("!(6<5) = ", !(a === 6));

/* >>>>>>>>>>>>>> Conditional Statements >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> 1- if Statements >>>>>>>>>>>>>> */

// let age = 25;

// if (age >= 18) {
//     console.log("you can vote");
// }

// if (age < 18) {
//     console.log("you cannot vote");
// }

/* >>>>>>>>>>>>>> 1- if Statements >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> dark mode apply in ( DOM ) >>>>>>>>>>>>>> */

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }

// console.log(color);

/* >>>>>>>>>>>>>> Conditional Statements >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> 2- if-else Statements >>>>>>>>>>>>>> */

// let age = 25;

// if (age >= 18) {
//     console.log("vote");
// }

// else {
//     console.log("not vote");
// }

/* >>>>>>>>>>>>>> 2- if-else Statements >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> dark mode apply in ( DOM ) >>>>>>>>>>>>>> */

// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// else {
//     color = "white";
// }

// console.log(color);

