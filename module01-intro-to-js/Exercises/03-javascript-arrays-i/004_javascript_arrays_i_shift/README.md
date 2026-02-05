Shift
=====

The `.shift()` method is used to remove the first element from an array, which effectively shifts all other elements to a lower index.

It modifies the original array by removing the item at the zeroth index and returns the removed element.

If the array is empty, it returns `undefined`. This method is particularly useful when dealing with operations where you need to process and remove elements from the beginning of the array sequentially.

### Practical Use:

*   **Queue operations**: Ideal for queue-like behavior (First-In, First-Out), where it represents the `dequeue` operation.
*   **Managing collections**: Useful for scenarios where elements are processed in the order they are added.
*   **Dynamic size adjustment**: Facilitates scenarios where the array size needs to be dynamically adjusted by removing elements from the beginning.