(function wednesday_1() {
  const pow = (x, n) => {
    if (n === 1) {
      return x;
    }

    return x * pow(x, n - 1);
  };

  //console.log(pow(2, 3));

  const fib = n => {
    if (n <= 1) {
      return n;
    }

    return fib(n - 1) + fib(n - 2);
  };

  // console.log(fib(7));

  //LE

  let name; // { name: undefined } --> null

  name = 'Alex'; // { name: 'Alex' } --> null

  name = 'Hanna'; // { name: 'Hanna' } --> null

  function sayHi() {
    //[[Env]] -> globalLE
    // sayHiLE { name: 'Hanna'} -> globalLE
    console.log(name);
  }
  // sayHi();
})();
