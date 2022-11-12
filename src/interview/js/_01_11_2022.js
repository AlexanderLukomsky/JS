/* eslint-disable */
(function _01_11_2022() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 2000);
  });

  promise.then(() => {}).then(() => {});

  const func = () => {
    let value = 0;
    return () => {
      console.log(value);
      value = value + 1;
    };
  };
  const a = func();

  const obj = {
    name: 'Hanna',
    func: () => {
      //  console.log(this);
    },
  };

  obj.func();

  const obj2 = {
    name: 'Alex',
    func(value, value2) {
      //   console.log(`${value} ${value2} ${this.name}`);
    },
  };
  obj2.func.apply(obj, ['hi', 'my friend']);

  function Man(name, age) {
    this.name = name;
    this.age = age;
  }

  Man.prototype.foo = function () {
    console.log(this.name);
  };
  Man.prototype.bar = function () {
    console.log(this.age);
  };

  const alex = new Man('Alex', 32);
  // alex.foo();
  // alex.bar();
  const obj3 = {
    name: 'Alex',
  };
  const obj4 = {
    age: 32,
  };
  Object.setPrototypeOf(obj3, obj4);

  class Class1 {
    static name = 'Alex';
  }
  class Class2 extends Class1 {
    bar() {
      //   console.log('123');
    }
  }
  const class2 = new Class2();
  class2.bar();

  function C1() {}
  function C2() {}
  C1.alex = 'Alex';
  C2.__proto__ = C1;
  C2.prototype.__proto__ = C1.prototype;
  C2.prototype.bar = function () {
    //   console.log('123');
  };

  const c2 = new C2();
  c2.bar();
  // console.log(C1.alex);

  Object.prototype.name = 'Alex';
  const a1 = {
    showName() {
      //     console.log(this.name);
    },
  };
  a1.showName();

  function makeBook() {
    let i = 0;
    let book = [];
    while (i < 10) {
      const j = i;
      const page = () => {
        console.log(j);
      };
      book.push(page);
      i++;
    }
    return book;
  }

  let reader = makeBook();
  // reader[0]();
  // reader[5]();
  function makeBook2() {
    let i = 0;
    let book = [];
    while (i < 10) {
      (j => {
        const page = () => {
          console.log(j);
        };
        book.push(page);
        i++;
      })(i);
    }
    return book;
  }

  let reader2 = makeBook2();
  // reader2[0]();
  //reader2[5]();
})();
