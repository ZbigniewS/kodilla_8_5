// plik scripts.js

var a = prompt('Podaj wartość A');
var b = prompt('Podaj wartość B');
var value = (a * b) + (2* a * b) - (b * b);
alert('Wynik równania kwadrtatowego (a * b) + (2* a * b) - (b * b) wynosi: ' + value)
console.log('Wynik równania kwadrtatowego (a * b) + (2* a * b) - (b * b) wynosi: ' + value);
if (value > 0) {
    //kod_jesli_warunek_pierwszy_jest_true 
        alert('Wynik równania kwadratowego dla A: ' + a  + ' i dla B: ' + b  + ' jest dodatni.');
        console.log('Wynik równania kwadratowego jest dodatni');
    } else if (value < 0) { // kod_jesli_warunek_drugi_jest_true
        alert('Wynik równania kwadratowego dla A: ' + a  + ' i dla B: ' + b  + ' jest ujemny.');
        console.log('Wynik równania kwadratowego jest ujemny');
    } else {
        alert('Wynik równania kwadratowego dla A: ' + a  + ' i dla B: ' + b  + ' jest równy ZERO.');
        console.log('Wynik równania kwadratowego jest równy ZERO');
    }
