# Divide & Conquer Method

Repeatedly applying a process to subsets of a larger data set.

## Example

**Binary Search**
Data must be sorted.

```javascript
search([3, 6, 7, 10, 14, 19, 23, 26, 30, 31, 33, 40], 7);
```

Select middle index and compare to search term. Repeat for result.

```javascript
[3, 6, 7, 10, 14, 19, 23, 26, 30, 31, 33, 40]
//                    ^^ is larger or smaller?
```

```javascript
[3, 6, 7, 10, 14, 19] // ignore [23, 26, 30, 31, 33, 40]
//        ^^ is larger or smaller?
```

```javascript
[3, 6, 7] // ignore [10, 14, 19, 23, 26, 30, 31, 33, 40]
//  ^ is larger or smaller?
```

```javascript
/* ignore [3, 6] */ [7] // ignore [10, 14, 19, 23, 26, 30, 31, 33, 40]
//                   ^ is search term?
```
