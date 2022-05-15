# Sliding Window Method

Using a subset of data incrementally over a larger set of data.

## Example

```
data = [3, 1, 4, 2, 9, 10, 6, 8]
```

**Viewing 2 at a time**
```
Iteration 1 -> [[3, 1], 4, 2, 9, 10, 6, 8]
Iteration 2 -> [3, [1, 4], 2, 9, 10, 6, 8]
Iteration 3 -> [3, 1, [4, 2], 9, 10, 6, 8]
  etc.
```
