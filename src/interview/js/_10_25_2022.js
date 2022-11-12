(function _10_25_2022() {
  /* eslint-disable */
  const foo = (x, y) => {
    console.log(y);

    return {
      bar: z => {
        foo(y, z);
      },
    };
  };
  //const res = foo(1); // undefined

  // res.bar(2); //2
  // res.bar(3); //3
  // res.bar(4); //4

  const foo2 = (x, y) => {
    console.log(y);

    return z => foo(y, z);
  };
  //const res2 = foo2(1); // undefined

  // res2(2); //2
  // res2(3); //3
  // res2(4); //4

  String.prototype.add = function (str) {
    return this + str;
  };

  const arr = [1, 2, 3];
  const res = arr
    .join('a') // '1a2a3
    .replaceAll('a', '0, ') // '10, 20, 3
    .add('0') // 10 20 30
    .split(',') // ['10', '20', '30']
    .map(n => +n) // [10, 20, 30]
    .reduce((acc, n) => {
      acc[n] = n;

      return acc;
    }, {}); //{10: 10, 20:20, 30:30}

  //console.log(res);

  function User(name) {
    this.name = name;
    this.getName = function () {
      return this.name;
    };
  }
  const user = new User('John');
  // console.log(user.getName());
  const { getName } = user;
  // console.log(getName());
  const g = user.getName;
  // console.log(g());

  const a = {};
  const b = {};
  const c = {};
  Object.setPrototypeOf(a, b);
  // console.log(b.__proto__ == c.__proto__);
  //console.log(a.__proto__ == b);
})();
