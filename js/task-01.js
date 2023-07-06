const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
const categoriesCount = categoriesItems.length;
console.log(`Number of categories: ${categoriesCount}`);

categoriesItems.forEach((item) => {
	const categoryName = item.querySelector("h2").textContent;
	const categoryElementsCount = item.querySelectorAll("li").length;
	console.log(`Category: ${categoryName}`);
	console.log(`Elements: ${categoryElementsCount}`);
});

// Zadanie 1
// W HTML znajduje się lista kategorii ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Napisz skrypt, który:

// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).
// Po wykonaniu w konsoli znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
