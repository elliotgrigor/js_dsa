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
