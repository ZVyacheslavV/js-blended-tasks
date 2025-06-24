'use strict';

//================================================================
/* == 7 == */
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortAlpha = arr => arr.toSorted((a, b) => a.localeCompare(b));

const sortAlpha = arr => [...arr].sort((a, b) => a.localeCompare(b));

const sortAlpha = arr => [...arr].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

const sortAlpha = arr => arr.toSorted((a, b) => (a > b ? 1 : a < b ? -1 : 0));

stringArray = ['banana', 'orange', 'apple', 'pear'];
console.log(sortAlpha(stringArray));

// START PERFORMANCE COMPARISON ---------------------------------------------------

stringArray = ['banana', 'orange', 'apple', 'pear'];

const iterations = 10000;
const times = 100;
const warmUpTimes = 3;
const execTime0 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance0 = performance.now();
  for (let i = 0; i < iterations; i++) {}
  const endPerformance0 = performance.now();
  execTime0.push(endPerformance0 - startPerformance0);
}
const total0 = execTime0.slice(warmUpTimes).reduce((acc, val) => acc + val, 0);
const avg0 = total0 / (iterations * times);
const sorted0 = [...execTime0].sort((a, b) => a - b);
const md0 =
  sorted0.length % 2 === 0
    ? (sorted0[sorted0.length / 2 - 1] + sorted0[sorted0.length / 2]) / 2
    : sorted0[Math.floor(sorted0.length / 2)];
const execTime1 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance1 = performance.now();
  for (let i = 0; i < iterations; i++) {
    // ::: First code for performance comparison :::
    const sortAlpha = arr => arr.toSorted((a, b) => a.localeCompare(b));
    sortAlpha(stringArray);
    // ::: End first code :::
  }
  const endPerformance1 = performance.now();
  execTime1.push(endPerformance1 - startPerformance1);
}
const total1 = execTime1.slice(warmUpTimes).reduce((acc, val) => acc + val, 0);
const avg1 = Math.abs(total1 / (iterations * times) - avg0);
const sorted1 = [...execTime1].sort((a, b) => a - b);
const md1 =
  sorted1.length % 2 === 0
    ? (sorted1[sorted1.length / 2 - 1] + sorted1[sorted1.length / 2]) / 2 - md0
    : sorted1[Math.floor(sorted1.length / 2)] - md0;
const execTime2 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance2 = performance.now();
  for (let i = 0; i < iterations; i++) {
    // ::: Second code for performance comparison :::
    const sortAlpha = arr => [...arr].sort((a, b) => a.localeCompare(b));
    sortAlpha(stringArray);
    // ::: End second code :::
  }
  const endPerformance2 = performance.now();
  execTime2.push(endPerformance2 - startPerformance2);
}
const total2 = execTime2.slice(warmUpTimes).reduce((acc, val) => acc + val, 0);
const avg2 = Math.abs(total2 / (iterations * times) - avg0);
const sorted2 = [...execTime2].sort((a, b) => a - b);
const md2 =
  sorted2.length % 2 === 0
    ? (sorted2[sorted2.length / 2 - 1] + sorted2[sorted2.length / 2]) / 2 - md0
    : sorted2[Math.floor(sorted2.length / 2)] - md0;
const execTime3 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance3 = performance.now();
  for (let i = 0; i < iterations; i++) {
    // ::: Third code for performance comparison :::
    const sortAlpha = arr =>
      [...arr].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
    sortAlpha(stringArray);
    // ::: End third code :::
  }
  const endPerformance3 = performance.now();
  execTime3.push(endPerformance3 - startPerformance3);
}
const total3 = execTime3.slice(warmUpTimes).reduce((acc, val) => acc + val, 0);
const avg3 = Math.abs(total3 / (iterations * times) - avg0);
const sorted3 = [...execTime3].sort((a, b) => a - b);
const md3 =
  sorted3.length % 2 === 0
    ? (sorted3[sorted3.length / 2 - 1] + sorted3[sorted3.length / 2]) / 2 - md0
    : sorted3[Math.floor(sorted3.length / 2)] - md0;
const execTime4 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance4 = performance.now();
  for (let i = 0; i < iterations; i++) {
    // ::: Fourth code for performance comparison :::
    const sortAlpha = arr =>
      arr.toSorted((a, b) => (a > b ? 1 : a < b ? -1 : 0));
    sortAlpha(stringArray);
    // ::: End fourth code :::
  }
  const endPerformance4 = performance.now();
  execTime4.push(endPerformance4 - startPerformance4);
}
const total4 = execTime4.slice(warmUpTimes).reduce((acc, val) => acc + val, 0);
const avg4 = Math.abs(total4 / (iterations * times) - avg0);
const sorted4 = [...execTime4].sort((a, b) => a - b);
const md4 =
  sorted4.length % 2 === 0
    ? (sorted4[sorted4.length / 2 - 1] + sorted4[sorted4.length / 2]) / 2 - md0
    : sorted4[Math.floor(sorted4.length / 2)] - md0;
console.log(`\nExecution times for each run over ${iterations} iterations:`);
console.log('WarmUp 1st: ', execTime1.slice(0, warmUpTimes));
console.log('First solution:', execTime1.slice(warmUpTimes));
console.log('WarmUp 2nd: ', execTime2.slice(0, warmUpTimes));
console.log('Second solution:', execTime2.slice(warmUpTimes));
console.log('WarmUp 3rd: ', execTime3.slice(0, warmUpTimes));
console.log('Third solution:', execTime3.slice(warmUpTimes));
console.log('WarmUp 4th: ', execTime4.slice(0, warmUpTimes));
console.log('Fourth solution:', execTime4.slice(warmUpTimes));
console.log('\n// Median of full runs 1st:', md1.toFixed(3).padStart(11), 'ms');
console.log('// Median of full runs 2nd:', md2.toFixed(3).padStart(11), 'ms');
console.log('// Median of full runs 3rd:', md3.toFixed(3).padStart(11), 'ms');
console.log('// Median of full runs 4th:', md4.toFixed(3).padStart(11), 'ms');
console.log('// Average per iteration 1st:', avg1.toFixed(6).padStart(9), 'ms');
console.log('// Average per iteration 2nd:', avg2.toFixed(6).padStart(9), 'ms');
console.log('// Average per iteration 3rd:', avg3.toFixed(6).padStart(9), 'ms');
console.log('// Average per iteration 4th:', avg4.toFixed(6).padStart(9), 'ms');

// END PERFORMANCE COMPARISON -----------------------------------------------------
//Performance 3:
// Median of full runs 1st:       3.727 ms
// Median of full runs 2nd:       3.938 ms
// Median of full runs 3rd:       1.329 ms
// Average per iteration 1st:  0.000375 ms
// Average per iteration 2nd:  0.000399 ms
// Average per iteration 3rd:  0.000137 ms

// Median of full runs 1st:       3.697 ms
// Median of full runs 2nd:       3.986 ms
// Median of full runs 3rd:       1.279 ms
// Average per iteration 1st:  0.000373 ms
// Average per iteration 2nd:  0.000402 ms
// Average per iteration 3rd:  0.000132 ms

// Median of full runs 1st:       3.720 ms
// Median of full runs 2nd:       3.999 ms
// Median of full runs 3rd:       1.273 ms
// Average per iteration 1st:  0.000374 ms
// Average per iteration 2nd:  0.000404 ms
// Average per iteration 3rd:  0.000130 ms

//Performance 4:
// Median of full runs 1st:       3.681 ms
// Median of full runs 2nd:       3.902 ms
// Median of full runs 3rd:       1.263 ms
// Median of full runs 4th:       1.138 ms
// Average per iteration 1st:  0.000373 ms
// Average per iteration 2nd:  0.000395 ms
// Average per iteration 3rd:  0.000130 ms
// Average per iteration 4th:  0.000118 ms
