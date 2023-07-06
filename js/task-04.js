
const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

let counterValue = 0;

const spanValue = document.querySelector("#value");
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

const incrementValue = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};

const decrementValue = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};

btnIncrement.addEventListener("click", incrementValue);
btnDecrement.addEventListener("click", decrementValue);




/*
Zadanie 4
Licznik składa się z elementu span i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość o jednostkę.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>


Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i nadaj jej początkową wartość wartość 0.
Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj i zmniejszaj wartość licznika.
Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue po każdej jej zmianie.


    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 
    slice()
    split()
    toLowerCase()
    toUpperCase()

*/