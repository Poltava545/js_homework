function myIsNaN(value) {
  return value !== value;
}

console.log(myIsNaN(NaN));  // повинно вивести true
console.log(myIsNaN(123));  // повинно вивести false
console.log(myIsNaN('abc'));  // повинно вивести false