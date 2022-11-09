(function thursday_3() {
  //if hint === string -> toString() -> valueOf()
  //else -> valueOf() -> toString()
  const rectangle = {
    a: 5,
    b: 10,
    [Symbol.toPrimitive]: function () {
      return this.a * this.b;
    },
  };

  const rectangle2 = {
    a: 5,
    b: 12,
    [Symbol.toPrimitive]: function () {
      return this.a * this.b;
    },
  };

  // console.log(rectangle > rectangle2);

  const obj = {
    toString() {
      console.log('toString');

      return '[object Object]';
    },
    valueOf() {
      console.log('valueOf');

      return NaN;
    },
  };

  //  console.log(Number(obj));

  const nums = [1, 2, 3];
  const iterator = nums[Symbol.iterator]();

  while (true) {
    const item = iterator.next();

    if (item.done) {
      break;
    }
    //   console.log(item);
  }

  const range = {
    from: 0,
    to: 10,
    [Symbol.iterator]() {
      let from = this.from;
      const to = this.to;

      return {
        next() {
          if (from <= to) {
            const iterator = { value: from, done: false };

            from = from + 1;

            return iterator;
          } else {
            return { value: undefined, done: true };
          }
        },
      };
    },
  };

  for (const iterator of range) {
    // console.log(iterator);
  }
  const user = {
    name: 'Alex',
    age: 32,
    country: 'Belarus',
    [Symbol.iterator]() {
      const keys = Object.keys(this);
      const length = keys.length;
      const context = this;
      let i = 0;

      return {
        next() {
          if (i < length) {
            const iterator = { value: context[keys[i]] };

            i = i + 1;

            return iterator;
          } else {
            return { value: undefined, done: true };
          }
        },
      };
    },
  };

  // console.log(...user);

  const man = {
    name: 'Alex',
    age: 32,
  };

  //  console.log(Object.getOwnPropertyDescriptor(man, 'name')); //{value: 'Alex', writable: true, enumerable: true, configurable: true}
  // console.log(Object.getOwnPropertyDescriptors(man));

  const man2 = Object.create(Object.prototype, {
    name: {
      value: 'Alex',
      writable: true,
      enumerable: true,
      configurable: true,
    },
    age: {
      value: 32,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  });

  // console.log(Object.getOwnPropertyDescriptor(man2, 'name'));
  // console.log(man2);
  const man3 = {};

  Object.defineProperty(man3, 'name', {
    value: 'Alex',
    writable: true,
    enumerable: true,
    configurable: true,
  });
  //  console.log(man3);
  const man4 = {};

  Object.defineProperties(man4, {
    name: {
      value: 'Alex',
      writable: true,
      enumerable: true,
      configurable: true,
    },
  });
  // console.log(man4);

  const object = Object.create(Object.prototype, {
    name: {
      value: 'Hanna',
      writable: false, //possibility of overwriting
      enumerable: true, // whether to show property in keys
      configurable: false,
    },
    age: {
      value: 25,
      writable: true, //possibility of overwriting
      enumerable: false, // whether to show property in keys
      configurable: false,
      // Can not delete properties
      // Can not change [configurable] and [enumerable]
      //if configurable false : [writable] can be changed from true -> to false
    },
  });

  object.name = '1';
  delete object.name;
  // console.log(object.name);
  // console.log(Object.keys(object));
  const t = Object.create(Object.prototype, {
    name: {
      value: 'Alex',
      writable: false,
      enumerable: true,
      configurable: true,
    },
  });
})();
