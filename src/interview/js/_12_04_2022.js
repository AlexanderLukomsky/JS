(function _12_04_2022() {
  const fn = () => {
    const a = 'fn le';

    return () => {
      console.log(a);
    };
  };
  const f = fn();

  // f();

  const foo = (x, n) => (n === 1 ? x : x * foo(x, n - 1));

  const fib = n => {
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
  };

  // console.log(foo(3, 2));
  // console.log(fib(7));

  const obj = {
    name: 'Alex',
    getName(message, message2) {
      return new Promise(res => {
        setTimeout(() => {
          res(`${message} ${this.name}${message2}`);
        }, 1000);
      });
    },
  };
  const obj2 = {
    name: 'Hanna',
  };
  const getName = async () => {
    const res = await obj.getName.apply(obj2, ['Hi', '!!!']);

    console.log(res);
  };

  // getName();

  function bar() {
    return this.name;
  }
  const obj1 = {
    name: 'Alex',
  };

  // console.log(bar.call(obj1));

  function Constr(name) {
    this.name = name;
  }
  Constr.prototype.getName = function () {
    console.log(this.name);
  };
  const u = new Constr('Hanna');

  // u.getName();
})();
