'use strict';

//================================================================
/* == (for of) and (for) comparison   == */

const randomArray1 = [];
const randomArray2 = [];
for (let i = 0; i < 10; i++)
  randomArray1.push(Math.trunc(Math.random() * 1000));
for (let i = 0; i < 100; i++)
  randomArray2.push(Math.trunc(Math.random() * 1000));
let totalOf1 = 0;
let totalOf2 = 0;
let totalFor1 = 0;
let totalFor2 = 0;

// START PERFORMANCE COMPARISON ---------------------------------------------------

const iterations = 10000;
const times = 100;
const warmUpTimes = 3;
const execTime1 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance1 = performance.now();
  for (let i = 0; i < iterations; i++) {
    // First code for performance comparison
    // let totalOf1 = 0;
    // let totalOf2 = 0;
    for (const elem of randomArray1) totalOf1 += elem;
    for (const elem of randomArray2) totalOf2 += elem;
    // End first code
  }
  const endPerformance1 = performance.now();
  execTime1.push(endPerformance1 - startPerformance1);
}
const total1 = execTime1.reduce((acc, val) => acc + val, 0);
const avg1 = total1 / (iterations * times);
const sorted1 = [...execTime1].sort((a, b) => a - b);
const md1 =
  sorted1.length % 2 === 0
    ? (sorted1[sorted1.length / 2 - 1] + sorted1[sorted1.length / 2]) / 2
    : sorted1[Math.floor(sorted1.length / 2)];
const execTime2 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance2 = performance.now();
  for (let i = 0; i < iterations; i++) {
    // Second code for performance comparison
    // let totalFor1 = 0;
    // let totalFor2 = 0;
    for (let i = 0; i < randomArray1.length; i++) totalFor1 += randomArray1[i];
    for (let i = 0; i < randomArray2.length; i++) totalFor2 += randomArray2[i];
    // End second code
  }
  const endPerformance2 = performance.now();
  execTime2.push(endPerformance2 - startPerformance2);
}
const total2 = execTime2.reduce((acc, val) => acc + val, 0);
const avg2 = total2 / (iterations * times);
const sorted2 = [...execTime2].sort((a, b) => a - b);
const md2 =
  sorted2.length % 2 === 0
    ? (sorted2[sorted2.length / 2 - 1] + sorted2[sorted2.length / 2]) / 2
    : sorted2[Math.floor(sorted2.length / 2)];
console.log(`\nExecution times for each run over ${iterations} iterations:`);
console.log('WarmUp 1st: ', execTime1.slice(0, warmUpTimes));
console.log('First solution:', execTime1.slice(warmUpTimes));
console.log('WarmUp 2nd: ', execTime2.slice(0, warmUpTimes));
console.log('Second solution:', execTime2.slice(warmUpTimes));
console.log('\n// Median of full runs 1st:', md1.toFixed(3).padStart(11), 'ms');
console.log('// Median of full runs 2nd:', md2.toFixed(3).padStart(11), 'ms');
console.log('// Average per iteration 1st:', avg1.toFixed(6).padStart(9), 'ms');
console.log('// Average per iteration 2nd:', avg2.toFixed(6).padStart(9), 'ms');

// END PERFORMANCE COMPARISON -----------------------------------------------------
console.log(
  'Sum for random arrays 1-2, (for of) and (for): ',
  totalOf1,
  totalOf2,
  totalFor1,
  totalFor2
);

// Median of full runs 1st:       0.727 ms
// Median of full runs 2nd:       0.419 ms
// Average per iteration 1st:  0.000090 ms
// Average per iteration 2nd:  0.000054 ms
//Sum variables local defined

// Median of full runs 1st:       3.295 ms
// Median of full runs 2nd:       0.503 ms
// Average per iteration 1st:  0.000366 ms
// Average per iteration 2nd:  0.000074 ms
//Sum for random arrays 1-2, (for of) and (for):  4869840000 49711920000 4869840000 49711920000

// Median of full runs 1st:       3.000 ms
// Median of full runs 2nd:       0.503 ms
// Average per iteration 1st:  0.000350 ms
// Average per iteration 2nd:  0.000074 ms
//Sum for random arrays 1-2, (for of) and (for):  4576290000 47797150000 4576290000 47797150000

// Median of full runs 1st:       0.728 ms
// Median of full runs 2nd:       0.421 ms
// Average per iteration 1st:  0.000090 ms
// Average per iteration 2nd:  0.000055 ms
//Sum variables local defined

// Median of full runs 1st:       3.241 ms
// Median of full runs 2nd:       0.503 ms
// Average per iteration 1st:  0.000362 ms
// Average per iteration 2nd:  0.000074 ms
//Sum for random arrays 1-2, (for of) and (for):  4836880000 47584970000 4836880000 47584970000

//================================================================
/* == Searching in array: (for of), (for) and (indexOf) comparison == */

const randomArray1 = [];
const randomArray2 = [];
for (let i = 0; i < 10000; i++)
  randomArray1.push(Math.trunc(Math.random() * 1000));
for (let i = 0; i < 100; i++)
  randomArray2.push(Math.trunc(Math.random() * 1000));

const rndNumberForSearch = Math.trunc(Math.random() * 1000);
let foundForOf = false;
let foundFor = false;
let foundIndexOf = false;

let indexFor = -1;
let indexOff = -1;

// START PERFORMANCE COMPARISON ---------------------------------------------------

const iterations = 10000;
const times = 100;
const warmUpTimes = 3;
const execTime1 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance1 = performance.now();
  for (let i = 0; i < iterations; i++) {
    // First code for performance comparison

    for (const elem of randomArray1)
      if (elem === rndNumberForSearch) {
        foundForOf = true;
        break;
      }
    // End first code
  }
  const endPerformance1 = performance.now();
  execTime1.push(endPerformance1 - startPerformance1);
}
const total1 = execTime1.slice(warmUpTimes).reduce((acc, val) => acc + val, 0);
const avg1 = total1 / (iterations * times);
const sorted1 = [...execTime1].sort((a, b) => a - b);
const md1 =
  sorted1.length % 2 === 0
    ? (sorted1[sorted1.length / 2 - 1] + sorted1[sorted1.length / 2]) / 2
    : sorted1[Math.floor(sorted1.length / 2)];
const execTime2 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance2 = performance.now();
  for (let i = 0; i < iterations; i++) {
    // Second code for performance comparison
    for (let i = 0; i < randomArray1.length; i++)
      if (randomArray1[i] === rndNumberForSearch) {
        foundFor = true;
        indexFor = i;
        break;
      }
    // End second code
  }
  const endPerformance2 = performance.now();
  execTime2.push(endPerformance2 - startPerformance2);
}
const total2 = execTime2.slice(warmUpTimes).reduce((acc, val) => acc + val, 0);
const avg2 = total2 / (iterations * times);
const sorted2 = [...execTime2].sort((a, b) => a - b);
const md2 =
  sorted2.length % 2 === 0
    ? (sorted2[sorted2.length / 2 - 1] + sorted2[sorted2.length / 2]) / 2
    : sorted2[Math.floor(sorted2.length / 2)];
const execTime3 = [];
for (let k = 0; k < warmUpTimes + times; k++) {
  const startPerformance3 = performance.now();
  for (let i = 0; i < iterations; i++) {
    // Third code for performance comparison
    indexOff = randomArray1.indexOf(rndNumberForSearch);
    if (indexOff !== -1) foundIndexOf = true;
    // End third code
  }
  const endPerformance3 = performance.now();
  execTime3.push(endPerformance3 - startPerformance3);
}
const total3 = execTime3.slice(warmUpTimes).reduce((acc, val) => acc + val, 0);
const avg3 = total3 / (iterations * times);
const sorted3 = [...execTime3].sort((a, b) => a - b);
const md3 =
  sorted3.length % 2 === 0
    ? (sorted3[sorted3.length / 2 - 1] + sorted3[sorted3.length / 2]) / 2
    : sorted3[Math.floor(sorted3.length / 2)];
console.log(`\nExecution times for each run over ${iterations} iterations:`);
console.log('WarmUp 1st: ', execTime1.slice(0, warmUpTimes));
console.log('First solution:', execTime1.slice(warmUpTimes));
console.log('WarmUp 2nd: ', execTime2.slice(0, warmUpTimes));
console.log('Second solution:', execTime2.slice(warmUpTimes));
console.log('WarmUp 3rd: ', execTime3.slice(0, warmUpTimes));
console.log('Third solution:', execTime3.slice(warmUpTimes));
console.log('\n// Median of full runs 1st:', md1.toFixed(3).padStart(11), 'ms');
console.log('// Median of full runs 2nd:', md2.toFixed(3).padStart(11), 'ms');
console.log('// Median of full runs 3rd:', md3.toFixed(3).padStart(11), 'ms');
console.log('// Average per iteration 1st:', avg1.toFixed(6).padStart(9), 'ms');
console.log('// Average per iteration 2nd:', avg2.toFixed(6).padStart(9), 'ms');
console.log('// Average per iteration 3rd:', avg3.toFixed(6).padStart(9), 'ms');

// END PERFORMANCE COMPARISON -----------------------------------------------------
console.log(
  'Flags - ForOf, For, IndexOf: ',
  foundForOf,
  foundFor,
  foundIndexOf
);
console.log('IndexFor: ', indexFor, ' IndexOf: ', indexOff);

//Array size 10
// Median of full runs 1st:       0.082 ms
// Median of full runs 2nd:       0.071 ms
// Median of full runs 3rd:       0.078 ms
// Average per iteration 1st:  0.000020 ms
// Average per iteration 2nd:  0.000012 ms
// Average per iteration 3rd:  0.000011 ms
//Flags, ForOf, For, IndexOf:  false false false

//Array size 100
// Median of full runs 1st:       0.722 ms
// Median of full runs 2nd:       0.696 ms
// Median of full runs 3rd:       0.637 ms
// Average per iteration 1st:  0.000087 ms
// Average per iteration 2nd:  0.000082 ms
// Average per iteration 3rd:  0.000069 ms
//Flags - ForOf, For, IndexOf:  false false false

//Array size 1000
// Median of full runs 1st:       5.109 ms
// Median of full runs 2nd:       2.993 ms
// Median of full runs 3rd:       1.175 ms
// Average per iteration 1st:  0.000542 ms
// Average per iteration 2nd:  0.000323 ms
// Average per iteration 3rd:  0.000125 ms
// Flags - ForOf, For, IndexOf:  true true true

//Array size 10000
// Median of full runs 1st:      49.531 ms
// Median of full runs 2nd:      28.768 ms
// Median of full runs 3rd:       4.685 ms
// Average per iteration 1st:  0.005136 ms
// Average per iteration 2nd:  0.002995 ms
// Average per iteration 3rd:  0.000485 ms
// Flags - ForOf, For, IndexOf:  true true true

//Array size 10000 with Break
// Median of full runs 1st:       4.541 ms
// Median of full runs 2nd:       2.805 ms
// Median of full runs 3rd:       5.886 ms
// Average per iteration 1st:  0.000485 ms
// Average per iteration 2nd:  0.000304 ms
// Average per iteration 3rd:  0.000611 ms
// Flags - ForOf, For, IndexOf:  true true true

//Array size 10000 with Break
// Median of full runs 1st:       3.666 ms
// Median of full runs 2nd:       2.265 ms
// Median of full runs 3rd:       4.747 ms
// Average per iteration 1st:  0.000395 ms
// Average per iteration 2nd:  0.000248 ms
// Average per iteration 3rd:  0.000491 ms
// Flags - ForOf, For, IndexOf:  true true true

//Array size 1000 with Break
// Median of full runs 1st:       3.728 ms
// Median of full runs 2nd:       2.310 ms
// Median of full runs 3rd:       4.859 ms
// Average per iteration 1st:  0.000401 ms
// Average per iteration 2nd:  0.000252 ms
// Average per iteration 3rd:  0.000502 ms
// Flags - ForOf, For, IndexOf:  true true true

//Array size 100 with Break
// Median of full runs 1st:       0.545 ms
// Median of full runs 2nd:       0.388 ms
// Median of full runs 3rd:       0.639 ms
// Average per iteration 1st:  0.000071 ms
// Average per iteration 2nd:  0.000052 ms
// Average per iteration 3rd:  0.000069 ms
// Flags - ForOf, For, IndexOf:  false false false

//Array size 100 with Break
// Median of full runs 1st:       0.352 ms
// Median of full runs 2nd:       0.199 ms
// Median of full runs 3rd:       0.379 ms
// Average per iteration 1st:  0.000052 ms
// Average per iteration 2nd:  0.000033 ms
// Average per iteration 3rd:  0.000038 ms
// Flags - ForOf, For, IndexOf:  true true true

//Array size 10000 with Break and index answer
// Median of full runs 1st:       2.408 ms
// Median of full runs 2nd:       1.480 ms
// Median of full runs 3rd:       3.163 ms
// Average per iteration 1st:  0.000264 ms
// Average per iteration 2nd:  0.000165 ms
// Average per iteration 3rd:  0.000330 ms
// Flags - ForOf, For, IndexOf:  true true true
// IndexFor:  507  IndexOf:  507

//Array size 10000 with Break and index answer
// Median of full runs 1st:       0.978 ms
// Median of full runs 2nd:       0.626 ms
// Median of full runs 3rd:       1.185 ms
// Average per iteration 1st:  0.000098 ms
// Average per iteration 2nd:  0.000063 ms
// Average per iteration 3rd:  0.000120 ms
// Flags - ForOf, For, IndexOf:  true true true
// IndexFor:  191  IndexOf:  191

//Array size 10000 with Break and index answer
// Median of full runs 1st:       0.333 ms
// Median of full runs 2nd:       0.189 ms
// Median of full runs 3rd:       0.342 ms
// Average per iteration 1st:  0.000034 ms
// Average per iteration 2nd:  0.000019 ms
// Average per iteration 3rd:  0.000036 ms
// Flags - ForOf, For, IndexOf:  true true true
// IndexFor:  50  IndexOf:  50

//================================================================
/* == Searching in array: (for of), (for) and (indexOf) comparison, 10000, little test fix == */

const randomArray1 = [];
const randomArray2 = [];
for (let i = 0; i < 10000; i++)
  randomArray1.push(Math.trunc(Math.random() * 1000));
for (let i = 0; i < 100; i++)
  randomArray2.push(Math.trunc(Math.random() * 1000));

const rndNumberForSearch = Math.trunc(Math.random() * 1000);
let foundForOf = false;
let foundFor = false;
let foundIndexOf = false;

let indexFor = -1;
let indexOff = -1;

// START PERFORMANCE COMPARISON ---------------------------------------------------

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
    // First code for performance comparison
    for (const elem of randomArray1)
      if (elem === rndNumberForSearch) {
        foundForOf = true;
        break;
      }
    // End first code
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
    // Second code for performance comparison
    for (let i = 0; i < randomArray1.length; i++)
      if (randomArray1[i] === rndNumberForSearch) {
        foundFor = true;
        indexFor = i;
        break;
      }
    // End second code
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
    // Third code for performance comparison
    indexOff = randomArray1.indexOf(rndNumberForSearch);
    if (indexOff !== -1) foundIndexOf = true;
    // End third code
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
console.log(`\nExecution times for each run over ${iterations} iterations:`);
console.log('WarmUp 1st: ', execTime1.slice(0, warmUpTimes));
console.log('First solution:', execTime1.slice(warmUpTimes));
console.log('WarmUp 2nd: ', execTime2.slice(0, warmUpTimes));
console.log('Second solution:', execTime2.slice(warmUpTimes));
console.log('WarmUp 3rd: ', execTime3.slice(0, warmUpTimes));
console.log('Third solution:', execTime3.slice(warmUpTimes));
console.log('\n// Median of full runs 1st:', md1.toFixed(3).padStart(11), 'ms');
console.log('// Median of full runs 2nd:', md2.toFixed(3).padStart(11), 'ms');
console.log('// Median of full runs 3rd:', md3.toFixed(3).padStart(11), 'ms');
console.log('// Average per iteration 1st:', avg1.toFixed(6).padStart(9), 'ms');
console.log('// Average per iteration 2nd:', avg2.toFixed(6).padStart(9), 'ms');
console.log('// Average per iteration 3rd:', avg3.toFixed(6).padStart(9), 'ms');

// END PERFORMANCE COMPARISON -----------------------------------------------------
console.log(
  '//Flags - ForOf, For, IndexOf: ',
  foundForOf,
  foundFor,
  foundIndexOf
);
console.log('//IndexFor: ', indexFor, ' IndexOf: ', indexOff);

//Array size 10000 with Break
// Median of full runs 1st:       3.935 ms
// Median of full runs 2nd:       2.439 ms
// Median of full runs 3rd:       5.095 ms
// Average per iteration 1st:  0.000396 ms
// Average per iteration 2nd:  0.000245 ms
// Average per iteration 3rd:  0.000511 ms

//Array size 10000 with Break and index answer
// Median of full runs 1st:      11.742 ms
// Median of full runs 2nd:       7.042 ms
// Median of full runs 3rd:      14.853 ms
// Average per iteration 1st:  0.001178 ms
// Average per iteration 2nd:  0.000708 ms
// Average per iteration 3rd:  0.001499 ms
// Flags - ForOf, For, IndexOf:  true true true
// IndexFor:  2520  IndexOf:  2520

//Array size 10000 with Break and index answer
// Median of full runs 1st:       1.010 ms
// Median of full runs 2nd:       0.647 ms
// Median of full runs 3rd:       1.246 ms
// Average per iteration 1st:  0.000102 ms
// Average per iteration 2nd:  0.000065 ms
// Average per iteration 3rd:  0.000128 ms
// Flags - ForOf, For, IndexOf:  true true true
// IndexFor:  198  IndexOf:  198

//With delta zeroing:

//Array size 10000 with Break and index answer
// Median of full runs 1st:       3.337 ms
// Median of full runs 2nd:       2.061 ms
// Median of full runs 3rd:       4.361 ms
// Average per iteration 1st:  0.000336 ms
// Average per iteration 2nd:  0.000209 ms
// Average per iteration 3rd:  0.000437 ms
// Flags - ForOf, For, IndexOf:  true true true
// IndexFor:  712  IndexOf:  712

//Array size 10000 with Break and index answer
// Median of full runs 1st:       0.535 ms
// Median of full runs 2nd:       0.352 ms
// Median of full runs 3rd:       0.655 ms
// Average per iteration 1st:  0.000053 ms
// Average per iteration 2nd:  0.000035 ms
// Average per iteration 3rd:  0.000069 ms
//Flags - ForOf, For, IndexOf:  true true true
//IndexFor:  98  IndexOf:  98

//Array size 10000 with Break and index answer
// Median of full runs 1st:      14.379 ms
// Median of full runs 2nd:       8.647 ms
// Median of full runs 3rd:      18.349 ms
// Average per iteration 1st:  0.001450 ms
// Average per iteration 2nd:  0.000866 ms
// Average per iteration 3rd:  0.001841 ms
//Flags - ForOf, For, IndexOf:  true true true
//IndexFor:  3092  IndexOf:  3092

//Array size 10000 with Break and index answer
// Median of full runs 1st:      46.310 ms
// Median of full runs 2nd:      27.859 ms
// Median of full runs 3rd:      58.893 ms
// Average per iteration 1st:  0.004661 ms
// Average per iteration 2nd:  0.002784 ms
// Average per iteration 3rd:  0.005905 ms
//Flags - ForOf, For, IndexOf:  false false false
//IndexFor:  -1  IndexOf:  -1

//================================================================
/* == Random array with strings == */

const generateRandomStrings = (count = 100, length = 5) => {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const getRandomString = () =>
    Array.from(
      { length },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join('');

  return Array.from({ length: count }, getRandomString);
};

const randomStrings = generateRandomStrings();
console.log(randomStrings);

//================================================================
