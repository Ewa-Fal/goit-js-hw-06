const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
  ];
  
  const list = document.querySelector("#ingredients");
  const listItems = [];
  ingredients.forEach((element) => {
	const item = document.createElement("li");
	item.textContent = element;
	item.classList.add("item");
	// list.append(item);
	listItems.push(item);
  });
  
  list.append(...listItems);

/*
Zadanie 2
W HTML znajduje się pusta lista ul#ingredients.

<ul id="ingredients"></ul>


W JavaScript znajduje się tablica ciągów.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


Napisz skrypt, który dla każdego elementu tablicy ingredients:

Utworzy oddzielny element <li>. 
Obowiązkowo użyj metody document.createElement().
Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
Doda do elementu klasę item.
Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.
*/
