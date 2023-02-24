function factorial(n) {
  let result = 1;
  for (n; n > 0; n--) result *= n;

  return result;
}

console.log(factorial(4));
