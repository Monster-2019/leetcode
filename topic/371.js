var getSum = function (a, b) {
  while (b) {
    sum = a ^ b
    b = (a & b) << 1
    a = sum
  }
  return sum
};

a = getSum(-2, 3)
console.log(a)

// await