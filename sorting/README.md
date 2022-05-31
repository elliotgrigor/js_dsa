# Sorting Algorithms

Sorting arrays of data into an order, such as:

- Ascending
- Descending
- Alphabetical
- etc.

## Bubble Sort

"Larger" values gradually get pushed to the end of the array through
the comparison and swapping of neighbouring elements.

```javascript
[12, 5, 9, 19, 17, 3]
```
```javascript
[(12, 5), 9, 19, 17, 3] -> [(5, 12), 9, 19, 17, 3] // swap
[5, (12, 9), 19, 17, 3] -> [5, (9, 12), 19, 17, 3] // swap
[5, 9, (12, 19), 17, 3] -> [5, 9, (12, 19), 17, 3] // no swap
[5, 9, 12, (19, 17), 3] -> [5, 9, 12, (17, 19), 3] // swap
[5, 9, 12, 17, (19, 3)] -> [5, 9, 12, 17, (3, 19)] // swap
// etc.
```

## Selection Sort

"Smaller" values gradually accumulate at the beginning of the array by
looking for the lowest value on each pass.

```javascript
[10, 7, 3, 9, 2, 11, 6];
```
```javascript
[10, 7, 3, 9, 2, 11, 6];
//   ^ is min? (yes)                 min = 7
[10, 7, 3, 9, 2, 11, 6];
//      ^ is min? (yes)              min = 3
[10, 7, 3, 9, 2, 11, 6];
//         ^ is min? (no)            min = 3
[10, 7, 3, 9, 2, 11, 6];
//            ^ is min? (yes)        min = 2
[10, 7, 3, 9, 2, 11, 6];
//               ^ is min? (no)      min = 2
[10, 7, 3, 9, 2, 11, 6];
//                   ^ is min? (no)  min = 2
```
```javascript
  [2, 7, 3, 9, 10, 11, 6];
// ^    swap   ^^
```

## Insertion Sort

"Smaller" values are inserted at the beginning of the array by looping
backwards from each value, comparing the value to each previous value.

```javascript
[6, 3, 9, 11, 2, 4, 10];
```
```javascript
  [6, 3, 9, 11, 2, 4, 10] -> [6, 6, 9, 11, 2, 4, 10]
// ^--^ is smaller? (yes)     ---^ move larger up
  [6, 6, 9, 11, 2, 4, 10] -> [3, 6, 9, 11, 2, 4, 10]
// ^ is beginning? (yes)      ^ set
  [3, 6, 9, 11, 2, 4, 10]
//    ^--^ is smaller? (no)
  [3, 6, 9, 11, 2, 4, 10]
// ^-----^ is smaller?
  [3, 6, 9, 11, 2, 4, 10]
//       ^--^^ is smaller?
  [3, 6, 9, 11, 2, 4, 10]
//    ^-----^^ is smaller?
  [3, 6, 9, 11, 2, 4, 10]
// ^--------^^ is smaller?
  [3, 6, 9, 11, 2, 4, 10] -> [3, 6, 9, 11, 11, 4, 10]
//          ^^--^ is smaller?          ----^^ move larger up
  [3, 6, 9, 11, 2, 4, 10] -> [3, 6, 9, 9, 11, 4, 10]
//       ^------^ is smaller?       ---^ move larger up
  [3, 6, 9, 11, 2, 4, 10] -> [3, 6, 6, 9, 11, 4, 10]
//    ^---------^ is smaller?    ---^ move larger up
// etc.
```

## Merge Sort

Takes advantage of the fact that small arrays (<=2) are easy to sort,
before gradually merging them together.

```javascript
[3, 44, 38, 5, 47, 15, 36, 26];
```
```javascript
      [3, 44, 38, 5, 47, 15, 36, 26]
//        |                   |          split
    [3, 44, 38, 5]     [47, 15, 36, 26]
//    |        |          |        |      split
   [3, 44]  [38, 5]   [47, 15]  [36, 26]
//  |   |    |   |      |   |     |   |    split
  [3] [44]  [38] [5]  [47] [15] [36] [26]
//  |   |    |   |      |   |     |   |    sort
   [3, 44]  [5, 38]   [15, 47]  [26, 36]
//    |        |          |        |      sort
    [3, 5, 38, 44]     [15, 26, 36, 47]
//        |                   |          sort
      [3, 5, 15, 26, 36, 38, 44, 47]
```
