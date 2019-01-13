// var name = "Jack";
// var age = 23;
// var sgootingScore = 45.6;
// var message = "Hi, my name is " + name + " and I am " + age + " years old!";

// var firstName = "John";
// var lastName = "Jacob";
// var dateOfBirth = "10-10-82";
// var age = 23;
// var progileImgUrl = "http://coolpicks.com/johnjacob.jpg";

// var loginWelcomeMessage = "Welcome, " + firstName + " " + lastName + ". Happy " + age + "rd birthday!";

// console.log(loginWelcomeMessage);

// var sum = 10 + 15;
// var mod = 3.111 % 3;

// console.log(mod);

// var myAccountBalance = 300;
// var nikeSBShoes = 799.23;
// var cupon = 500;

// if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance -= nikeSBShoes;
//     console.log("We just bougth siem dope shoes!");
//     console.log("Acount Balance: " + myAccountBalance);
// } else if (nikeSBShoes - cupon <= myAccountBalance) {
//     console.log("We just bought some dope shoes with a cupon!");
//     myAccountBalance -= nikeSBShoes - cupon;
//     console.log("Acount Balance: " + myAccountBalance);
// } else {
//     console.log("You too broke to shoes bra!");
// }

// if (1 === 1 && 2 === 2 || "joe" === "joe") {
//     console.log("These are both true");
// }

// if (true && true) {
//     console.log("These ate the same!");
// }

// if (1 === 3 || "joe" === "joe") {
//     console.log("one fo these are true!");
// }

// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;
// var disabledHandicap = false;

// if ((cat1 > cat2 && cat1 > cat3) && !disabledHandicap) {
//     console.log("Cat 1 is the cutest!");
// } else if ((cat2 > cat1 && cat2) > cat3 && !disabledHandicap) {
//     console.log("Cat 2 is the cutest!");
// } else if ((cat3 > cat1 && cat3) > cat1 || disabledHandicap) {
//     console.log("Cat 3 is the cutest!");
// }

// var students = ["Timmy", "Janessa", "Arun"];
// var naughtyList = [];
// naughtyList.push(students[0]);
// var index = naughtyList.indexOf("Timmy");

// if (index > -1) {
//     naughtyList.splice(index, 1);
// }
// console.log(index);
// console.log("Bad kids: " + naughtyList);

// var total = 10;
// for (var x = 0; x < total; x++) {
//     console.log(x);
// }

// var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];
// for (var x = 0; x < students.length; x++) {
//     console.log(students[x]);
// }

// EXERCISE - LOOPS & ARRAYS
// 1) Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output :  
// "0 is even" 
// "1 is odd" 
// "2 is even" 

// for (var x = 0; x < 16; x++) {
//     if ((x % 2) === 0) {
//         console.log(x + " is even");
//     } else {
//         console.log(x + " is odd");
//     }
// }

// 2) Using loops, create a Javascript program that prints out the following:

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

// console.log("###########################");
// var text = "*";
// for (x = 1; x < 6; x++) {

//     console.log(text.repeat(x));
// }

// console.log("###########################");

// // 3) Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print Code instead of the number and for the multiples of five print Monkey. For numbers which are multiples of both three and five print CodeMonkey

// for (x = 0; x <= 100; x++) {
//     if ((x % 3) === 0) {
//         console.log("Code");
//     } else if ((x % 5) === 0) {
//         console.log("Monkey");
//     } else if (((x % 3) === 0) && ((x % 5) === 0)) {
//         console.log("CodeMonkey");
//     } else {
//         console.log(x + " / " + x + " is " + x % x);
//     }
// }

// function area(length, width) {
//     return length * width;
// }

// var rectanglesAreas = [];
// rectanglesAreas.push(area(10, 15));
// rectanglesAreas.push(area(14, 2));
// rectanglesAreas.push(area(4, 5));
// console.log(rectanglesAreas);

// var bankBalance = 500;

// function makeTransaction(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successfull");
//     } else {
//         console.log("Insufficient Funds");
//     }
// }

// console.log(bankBalance);
// makeTransaction(79.00);
// console.log(bankBalance);
// makeTransaction(2.32);
// console.log(bankBalance);
// makeTransaction(10.45);
// console.log(bankBalance);
// makeTransaction(450.00);
// console.log(bankBalance);

// var transaction = function(priceOfSale) {
//     if (priceOfSale <= bankBalance) {
//         bankBalance -= priceOfSale;
//         console.log("Purchase Successfull");
//     } else {
//         console.log("Insufficient Funds");
//     }
// }

// transaction(10);
// console.log(bankBalance);

// var printCustomerName = function(first, last) {
//     console.log("First Name: " + first + " Last Name: " + last);
// }

// var applyForCreditCard = function(creditScore, soul) {
//     // call some function to process application
// }

// var bankOperations = [];
// bankOperations.push(transaction);
// bankOperations.push(printCustomerName);
// bankOperations.push(applyForCreditCard);

// Given one or more parameters, create a function that returns the area of a triangle

// function areaOfTriangle(a, h) {
//     return (0.5 * a * h);
// }


// console.log(areaOfTriangle(4, 2));

// // Given one or more parameters, create a function that returns the area of a circle

// function areaOfCircle(r) {
//     return (3.14 * r * r);
// }


// console.log(areaOfCircle(5));

// // Create a single function that can take one or more parameters, and can return the area regardless of the shape (single function for triangle, circle, or rectangle)

// function losowe(name, a, h) {
//     if (name === "t") {
//         return (0.5 * a * h);
//     } else if (name === "c") {
//         return (Math.PI * a * a);
//     } else if (name === "k") {
//         return a * a;
//     }
// }

// console.log(losowe("t", 3, 5));
// console.log(losowe("c", 3));
// console.log(losowe("k", 3));



//     var student0 = {
//         firstName: "Jayne",
//         lastName: "Loo",
//         age: 8
//     }
// };

// console.log(student0.greeting());

// Creates a nwe empty object
// var student1 = new Object();
// student1.firstName = "John";
// student1.lastName = "Parker";
// student1.age = 7;

// var student2 = {};
// student2.fistrName = "Zack";
// student2.lastName = "Bobo";
// student2.age = 5;


// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);

// var students = [];

// function Student(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.greeting = function() {
//         return "Hi, I'm " + this.firstName + " and i'm " + this.age + " years old.";
//     };
// };

// students.push(new Student("Jenny", "Laga", 5));
// students.push(new Student("Timmy", "Turner", 8));
// students.push(new Student("Carl", "Jr", 4));

// var student = students[0];

// //  for in loop
// for (var key in student) {
//     console.log(student[key]);
// }

// for (var x = 0; x < students.length; x++) {
//     var student = students[x];
//     console.log(student.greeting());
// };

// var s1 = new Student("Jenny", "Laga", 5);
// console.log(s1);
// console.log(s1.greeting());
// students.push(student0);
// students.push(student1);
// students.push(student2);

// Alex Brown's

this.car = "Honda Civic w/ Ugly Spoiler";

var marksGarage = {
    car: "Aston Martin",
    getCar: function() {
        return this.car;
    }
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;

console.log(storeGetCarForLater());

// var theRealTheGetCarFunction = storeGetCarForLater.bind(marksGarage);

// console.log(theRealTheGetCarFunction());

var theReal2 = marksGarage.getCar.bind(marksGarage);
console.log(theReal2);