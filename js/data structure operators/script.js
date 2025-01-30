'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    //default values de cacat imo
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is yourr delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*

// **********************
// Logical ASSIGNMENT Operators
// **********************

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH assignment operator - considers falsy just null and undefined
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// **********************
// Logical Operators
// **********************

//they can: use ANY data types, return ANY data types, short-circuiting

console.log('----- OR -----');

console.log(3 || 'Jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//doesnt even look past the first "true" value

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');
//return the last value if all of them are true

console.log(0 && 'jonas');
// short-circuits when the first operator is 0
console.log(7 && 'jonas');

console.log('hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza &&
  restaurant.orderPizza('mushroom', 'spinach', 'bell peppers');

//??
// nu ne place, ca daca nu sunt oaspeti (adica 0)(dar valoarea nu este undefined), ne pune 10

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish: null and undefined (not 0 and '' - le considera true)
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

// **********************
// The Rest Operator
// **********************

//SPREAD operator, because on the RIGHT side of '='
const arr = [1, 2, 3, ...[4, 5]];

//REST operator, because on the LEFT side of '='
//rest collects the unused elements
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//doesn't include skipped elements!!!
//the rest element MUST be the LAST element

//also works in OBJECTS, dar scoate objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//functions
const add = function (...numbers) {
  //passes arrays
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

//order pizza

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'peppers');
restaurant.orderPizza('mushrooms');
//what the hell so cool

// **********************
// The Spread Operator
// **********************

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

//to get individual arrays
console.log(...newArr);

//nu modifica arrayul initial
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(restaurant.mainMenu);
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2+ array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterables: arrays, strings, maps, sets, BUT NOT objects
//breaking down a string
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//get function params dynamically - through pop ups on site
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects - merge spread si pe ele

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Pulica ' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// **********************
// Deconstructuring objects
// **********************

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// **********************
// Deconstructuring arrays
// **********************

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
// console.log(first, second);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// receive ywo return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/
