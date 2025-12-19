function indexOfIgnoreCase(s1, s2) {
  if(s1.length < s2.length) {
    return -1;
  }

  return s1.toLowerCase().indexOf(s2.toLowerCase()); 
}

console.log(indexOfIgnoreCase("apple", "ple"));
console.log(indexOfIgnoreCase("Hello World", "world"));
console.log(indexOfIgnoreCase("test", "aaa"));

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
