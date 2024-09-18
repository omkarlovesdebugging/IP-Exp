function squareIterator(arr) {
    let index = 0;
    
    return {
      next: function() {
        if (index < arr.length) {
          let value = arr[index] ** 2;
          index++;
          return { value, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
  
  // Usage example
  const numbers = [1, 2, 3, 4, 5];
  const squares = squareIterator(numbers);
  
  let result = squares.next();
  while (!result.done) {
    console.log(result.value); // Logs the square of each number
    result = squares.next();
  }
  