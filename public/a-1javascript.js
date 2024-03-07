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

/* >>>>>>>>>>>>>> Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> 1- Artimetic Operators >>>>>>>>>>>>>> */
 
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
/* >>>>>>>>>>>>>> 1- Artimetic Operators >>>>>>>>>>>>>> */
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
/* >>>>>>>>>>>>>> 2- Asignment Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> a += 4; a -= 4; a *= 4; a /= 4; a %= 4; a **= 4; >>>>>>>>>>>>>> */

// let a = 5;
// let b = 2;

// a += 4;
// console.log("a = ", a);

/* >>>>>>>>>>>>>> 3- Comparison Operators >>>>>>>>>>>>>> */

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

/* >>>>>>>>>>>>>> Ternary Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> ( ? ) simpler, compact, shortcut of if-else >>>>>>>>>>>>>> */

// let age = 25;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

/* >>>>>>>>>>>>>> 4- Logical Operators >>>>>>>>>>>>>> */
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

/* >>>>>>>>>>>>>> 4- Logical Operators >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> ( || ) Pipe Sign -> || >>>>>>>>>>>>>> */

// let a = 6;
// let b = 5;

// console.log("cond1 || cond2 = ", a < b || a === 6);

/* >>>>>>>>>>>>>> 4- Logical Operators >>>>>>>>>>>>>> */
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
/* >>>>>>>>>>>>>> odd or even >>>>>>>>>>>>>> */

// let num = 10;

// if (num % 2 === 0) {
//     console.log(num, "is even");
// }
// else {
//     console.log(num, "is odd");
// }

/* >>>>>>>>>>>>>> 2- if-else Statements >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> odd or even >>>>>>>>>>>>>> */

// let num = 7;

// if (num % 2 === 0) {
//     console.log(num, "is even");
// }
// else {
//     console.log(num, "is odd");
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

/* >>>>>>>>>>>>>> 3- else-if Statements >>>>>>>>>>>>>> */

// let mode = "blue";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// else if (mode === "blue") {
//     color = "blue";
// }
// else if (mode === "pink") {
//     color = "pink";
// }
// else {
//     color = "white";
// }

// console.log(color);

/* >>>>>>>>>>>>>> 3- else-if Statements >>>>>>>>>>>>>> */

// let score = 90;
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// }
// else if (score >= 70 && score <= 89) {
//     grade = "B";
// }
// else if (score >= 60 && score <= 69) {
//     grade = "C";
// }
// else if (score >= 50 && score <= 59) {
//     grade = "D";
// }
// else if (score >= 0 && score <= 49) {
//     grade = "E";
// }
// console.log("according to your scores, your grade was : ", grade);

/* >>>>>>>>>>>>>> 3- else-if Statements >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> With Prompt in Browser & Show in Console >>>>>>>>>>>>>> */

// let score = prompt("enter your score (0-100):");
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// }
// else if (score >= 70 && score <= 89) {
//     grade = "B";
// }
// else if (score >= 60 && score <= 69) {
//     grade = "C";
// }
// else if (score >= 50 && score <= 59) {
//     grade = "D";
// }
// else if (score >= 0 && score <= 49) {
//     grade = "E";
// }
// console.log("according to your scores, your grade was : ", grade);

/* >>>>>>>>>>>>>> Loops >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> 1- For Loop >>>>>>>>>>>>>> */

// for (let count = 1; count <= 10000
    
//     ; count++) {
//     console.log("Kartoa");
// }
// console.log("loop has ended");

/* >>>>>>>>>>>>>> 1- For Loop >>>>>>>>>>>>>> */

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

/* >>>>>>>>>>>>>> 1- For Loop >>>>>>>>>>>>>> */

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

/* >>>>>>>>>>>>>> 1- For Loop >>>>>>>>>>>>>> */

// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
// }

/* >>>>>>>>>>>>>> 1- For Loop >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> With Prompt in Browser & Show in Console >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> sum += (i+1); >>>>>>>>>>>>>> */

// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)

// for (let i = 0; i < n; i++) {
//     sum += (i+1);
// }
// console.log("Sum of first " + n + " natural number is " + sum);

/* >>>>>>>>>>>>>> 1- For Loop >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> sum += (i+1); >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> With Prompt in Browser & Show in Console >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> console.log((i+1), "+") >>>>>>>>>>>>>> */

// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)

// for (let i = 0; i < n; i++) {
//     sum += (i+1);
//     console.log((i+1), "+")
// }
// console.log("Sum of first " + n + " natural number is " + sum);

/* >>>>>>>>>>>>>> Loops >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> 2- While Loop >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Important Notes: in (while loop) last condition after curly bracket } (without semicolon;) not write semicolon; >> } <<  >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> and >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Important Notes: in (do while loop) last condition after bracket ) (with semicolon;) write semicolon; >> }; <<  >>>>>>>>>>>>>> */

// let i = 1;
// while (i <= 1000) {
//     console.log("Kartoa");
//     i++;
// }

/* >>>>>>>>>>>>>> 2- While Loop >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Important Notes: in (while loop) last condition after curly bracket } (without semicolon;) not write semicolon; >> } <<  >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> and >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Important Notes: in (do while loop) last condition after bracket ) (with semicolon;) write semicolon; >> }; <<  >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> With Prompt in Browser & Show in Console >>>>>>>>>>>>>> */

// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)

// let i = 0;
// while (i<n) {
//     console.log(i)
//     i++;
// }

/* >>>>>>>>>>>>>> Loops >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> 3- Do While Loop >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Important Notes: in (while loop) last condition after curly bracket } (without semicolon;) not write semicolon; >> } <<  >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> and >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Important Notes: in (do while loop) last condition after bracket ) (with semicolon;) write semicolon; >> }; <<  >>>>>>>>>>>>>> */

// let i = 20;
// do {
//     console.log("Kartoa");
//     i++;
// }
// while (i <= 10);

/* >>>>>>>>>>>>>> 3- Do While Loop >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Important Notes: in (while loop) last condition after curly bracket } (without semicolon;) not write semicolon; >> } <<  >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> and >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Important Notes: in (do while loop) last condition after bracket ) (with semicolon;) write semicolon; >> }; <<  >>>>>>>>>>>>>> */

// let i = 1;
// do {
//     console.log("i=",i);
//     i++;
// }
// while (i <= 10);

/* >>>>>>>>>>>>>> 4- For-in Loop >>>>>>>>>>>>>> */

// let student = {
//     name: "Ali",
//     age: 20,
//     cpga: 7.5,
//     isPass: true,
// };

// for (let key in student) {
//     console.log("key=", key, " value=", student[key]);
// }

/* >>>>>>>>>>>>>> 4- For-in Loop >>>>>>>>>>>>>> */

// let obj = {
//     Ali: 90,
//     Ahmed: 85,
//     Sohail: 80,
    
// }

// for (let a in obj){
//     console.log("Marks of " + a + " are " + obj[a])
// }

/* >>>>>>>>>>>>>> 5- For-of Loop >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Notes: (let i of str) i is iterator -> Characters >>>>>>>>>>>>>> */

// let str = "Kartoa";

// for (let i of str) {
//     console.log("i=", i);
// }

/* >>>>>>>>>>>>>> 5- For-of Loop >>>>>>>>>>>>>> */
/* >>>>>>>>>>>>>> Notes: (let val of str) val is value >>>>>>>>>>>>>> */

// let str = "Kartoa";

// let size = 0;
// for (let val of str) {
//     console.log("val=", val);
//     size++;
// }

// console.log("string size = ", size);



