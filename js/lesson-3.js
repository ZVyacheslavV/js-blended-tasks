'use strict';

//================================================================
/* == 7 == */
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortAlpha = arr => [...arr].sort((a, b) => a.localeCompare(b));

const sortAlpha = arr => [...arr].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

stringArray = ['banana', 'orange', 'apple', 'pear'];
console.log(sortAlpha(stringArray));
