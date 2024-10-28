//Uppgift 1
/*let name = prompt("Vad heter du?");
console.log("Hej " +name + "! Välkommen")*/

//Uppgift 2

/*let word1 = prompt("Mata in det första ordet:");
let word2 = prompt("Mata in det andra ordet:");

if (word1 < word2) {
    console.log(word1 + " kommer före " + word2 + " i alfabetet.");
} else if (word1 > word2) {
    console.log(word2 + " kommer före " + word1 + " i alfabetet.");
} else {
    console.log("Orden är likadana.");
}*/

//Uppgift 3

/*ålder = prompt("Hur gammal är du?")

if ( ålder >= 18) {
    console.log("Du är över 18");
} else {
    console.log("Du är fortfarande under 18");
}*/

//Uppgift 4
/*
let djur = "katt";

let gissa = prompt("Gissa vilket djur jag tänker på")

if (gissa.toLowerCase() === djur) {
    console.log("Rätt gissat det var " + djur);
} else {
    console.log("Det var fel djur du gissa på försök igen!")
}*/

//Uppgift 5
/*
let färg1 = "röd";

let färg2 = "blå";

let färg3 = "grön";

let favorit = prompt("Vad är din favoritfärg?")

 if (favorit === färg1) {
    console.log("Din favoritfärg är " + färg1)
} else if (favorit === färg2) { 
    console.log("Din favoritfärg är " + färg2)
} else if (favorit === färg3) {
    console.log("Din favoritfärg är " + färg3)
} else {
    console.log("Du har en annan favoritfärg än blå ,grön , röd")
}*/

//Uppgift 6
/*
let resultat = prompt("Vad har du fått för resultat 0-100?")

if (resultat < 50) {
    console.log("Du är inte godkänd")
} else if (resultat >=50) {
    console.log("Grattis du är godkänd!")
}*/

//Uppgift 7
/*
let väder = prompt("Vad är det för väder idag?");
väder = väder.toLowerCase();

if (väder === "soligt") {
    console.log("Du kanske kan gå ut och sola?");
} else if(väder === "regnigt"){
    console.log("Du kan sitta inne idag och må bra");
} else if (väder === "molnigt") {
    console.log("Du kanske kan ut och gå");
} else {
    console.log("Du kan välja själv idag vad du ska göra")
}*/

//Uppgift 8
/*
let språk = prompt("Vad talar du för språk?");
språk = pråk.toLocaleLowerCase();

if (språk === "svenska") {
    console.log("Svenska är ett bra språk!");
} else if (språk === "engelska") {
    console.log("Engelska är det många som talar!");
} else {
    console.log(" Jag vet inte som mycket om det språk du talar. Jag får lära mig");
}*/

//Uppgift 9

/*
let number = prompt("Ange ett tal:");

number = Number(number);

if (number % 5 === 0) {
    console.log(number + " är en multipel av 5.");
} else {
    console.log(number + " är inte en multipel av 5.");
}*/

//Uppgift 10
/*
let svar = confirm("Vill du gå ut?");

if (svar) {
 alert("Då går vi ut!");
} else {
    alert("Då går vi inte ut!")
}*/

//Uppgift 11

/*
let character = prompt("Ange ett tecken:");
if (!isNaN(character) && character.trim() !== "") {
    console.log(character + " är en siffra.");
} else if (/^[a-zA-Z]$/.test(character)) {
    console.log(character + " är en bokstav.");
} else {
    console.log("Det angivna tecknet är varken en enskild siffra eller bokstav.");
}*/

//Uppgift 12
/*
let word1 = prompt("Ange det första ordet:");
let word2 = prompt("Ange det andra ordet:");
let word3 = prompt("Ange det tredje ordet:");

let longestWord;

if (word1.length > word2.length && word1.length > word3.length) {
    longestWord = word1;
} else if (word2.length > word1.length && word2.length > word3.length) {
    longestWord = word2;
} else if (word3.length > word1.length && word3.length > word2.length) {
    longestWord = word3;
} else {
    longestWord = "Det finns fler än ett ord som är längst.";
}
console.log("Det längsta ordet är: " + longestWord);*/

//Uppgift 13
/*
let password = prompt("Ange ett lösenord:");

if (password.length >= 8 && /\d/.test(password)) {
    console.log("Lösenordet är tillräckligt långt och innehåller minst en siffra.");
} else if (password.length < 8) {
    console.log("Lösenordet är för kort. Det måste vara minst 8 tecken.");
} else if (!/\d/.test(password)) {
    console.log("Lösenordet måste innehålla minst en siffra.");
}*/

//Uppgift 14

/*
let age = prompt("Ange din ålder:");

age = Number(age);


if (age >= 0 && age <= 12) {
    console.log("Du tillhör ålderskategorin: barn.");
} else if (age >= 13 && age <= 19) {
    console.log("Du tillhör ålderskategorin: tonåring.");
} else if (age >= 20 && age <= 64) {
    console.log("Du tillhör ålderskategorin: vuxen.");
} else if (age >= 65) {
    console.log("Du tillhör ålderskategorin: pensionär.");
} else {
    console.log("Ogiltig ålder. Ange ett positivt tal.");
}*/

//Uppgift 15

/*
let choice1 = confirm("Vill du välja alternativ 1?");

if (choice1) {
    console.log("Du valde alternativ 1!");
} else {
    let choice2 = confirm("Vill du välja alternativ 2?");

    if (choice2) {
        console.log("Du valde alternativ 2!");
    } else {
        console.log("Du valde inget av alternativen.");
    }
}*/


//Miniräknare uppgiften

alert("Välkommen till miniräknaren!");


let num1 = Number(prompt("Ange ett första tal:"));


let num2 = Number(prompt("Ange ett andra tal:"));


let operation = prompt("Vilket räknesätt vill du använda? Ange +, -, * eller /");


let result;
if (operation === "+") {
    result = num1 + num2;
    alert("Resultat: " + num1 + " + " + num2 + " = " + result);
} else if (operation === "-") {
    result = num1 - num2;
    alert("Resultat: " + num1 + " - " + num2 + " = " + result);
} else if (operation === "*") {
    result = num1 * num2;
    alert("Resultat: " + num1 + " * " + num2 + " = " + result);
} else if (operation === "/") {
    
    if (num2 === 0) {
        alert("Fel: Division med 0 är inte tillåten.");
    } else {
        result = num1 / num2;
        alert("Resultat: " + num1 + " / " + num2 + " = " + result);
    }
} else {
    alert("Felaktigt räknesätt. Vänligen använd endast +, -, * eller /.");
}
alert("Tack för att du använde miniräknaren! Hej då!");

