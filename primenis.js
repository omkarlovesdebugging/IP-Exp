function* primeGenerator(limit) {
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let num = 2;
    while (num <= limit) {
      if (isPrime(num)) {
        yield num;
      }
      num++;
    }
  }
  
  // Usage example
  const primeGen = primeGenerator(20);
  
  for (let prime of primeGen) {
    console.log(prime); // Logs prime numbers up to 20
  }
  