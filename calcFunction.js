const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const returnPrime = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
};

const findMedian = (num) => {
  const arr = returnPrime(num);
  if (arr.length === 0) return 'no median found';
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return [arr[mid]];
  } else {
    return [arr[mid - 1], arr[mid]];
  }
};

exports.findMedian = findMedian;
