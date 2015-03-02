function ex4(x, y) {
  var start = Math.max(x,y);

  while(1) {
    if (start %x === 0 && start%y === 0) {
      console.log('Found: ' + start);
      return start;
    }
    start++;
  }  
}

function ex3(x, y) {
  var start = Math.min(x,y);
  
  while(1) {
    if (x % start === 0 && y % start === 0) {
      console.log('Found: ' + start);
      return start;
    }
    start--;
  }
}

function ex1() {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);
  var z = Math.floor(Math.random() * 100);
  var max = Math.max(x, y,z);
  console.log('x = ', x, '; y = ', y, '; z = ', z);
  console.log('max = ', max);
} 

function ex2() {
  var n = Math.floor((Math.random() * 10000) + 1000);
  var sum  = 0;
  console.log('n = ', n);
  
  while(n>0) {
    sum += n % 10;
    n = Math.floor(n/10);
  }

  console.log('sum = ', sum);
  return sum;
}