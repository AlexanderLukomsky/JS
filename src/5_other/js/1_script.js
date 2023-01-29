(() => {
  const numberArr = [3, 5, 15, 1, 2, 7];
  const getMaxNumberWithReduce = arr => {
    return arr.reduce((acc, number) => (acc > number ? acc : number), arr[0]);
  };
  const getMaxNumberWithFor = arr => {
    let res = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > res) {
        res = arr[i];
      }
    }

    return res;
  };

  const getMinNumberWithReduce = arr => {
    return arr.reduce((acc, number) => (acc < number ? acc : number), arr[0]);
  };
  const getMinNumberWithFor = arr => {
    let res = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < res) {
        res = arr[i];
      }
    }

    return res;
  };

  // console.log(getMaxNumberWithReduce(numberArr));
  // console.log(getMaxNumberWithFor(numberArr));
  // console.log(getMinNumberWithReduce(numberArr));
  // console.log(getMinNumberWithFor(numberArr));

  const bracketsArr = '(()())';
  const isClosedBracket = str => {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        stack.push(str[i]);
      } else {
        const lastElement = stack.pop();

        if (!lastElement) return false;
      }
    }
    if (!stack.length) return true;
  };

  //console.log(isClosedBracket(bracketsArr));

  const anyBracketsArr = '(()[]{}())';

  const isClosedAnyBrackets = str => {
    const stack = [];
    const conformity = {
      '(': ')',
      '{': '}',
      '[': ']',
    };

    for (let i = 0; i < str.length; i++) {
      const bracket = str[i];

      if (bracket === '(' || bracket === '{' || bracket === '[') {
        stack.push(bracket);
      } else {
        const lastEl = stack.pop();

        if (conformity[lastEl] !== str[i]) {
          return false;
        }
      }
    }
    if (stack.length) return false;

    return true;
  };

  // console.log(isClosedAnyBrackets(anyBracketsArr));

  const user = {
    name: 'Hanna',
    age: 35,

    gen() {
      const keys = Object.keys(this);
      const keysLength = keys.length;
      const context = this;
      let iteration = 0;

      return {
        next() {
          if (keys[iteration] === 'gen') {
            iteration = iteration + 1;
            context.gen();
          }
          if (iteration < keysLength) {
            const iterator = { value: context[keys[iteration]], done: false };

            iteration = iteration + 1;

            return iterator;
          }

          return { value: undefined, done: true };
        },
      };
    },
    city: 'NY',
    country: 'USA',

    [Symbol.iterator]() {
      const keys = Object.keys(this);
      const keysLength = keys.length;
      const context = this;
      let iteration = 0;

      return {
        next() {
          if (keys[iteration] === 'gen') {
            iteration = iteration + 1;
            context.gen();
          }
          if (iteration < keysLength) {
            const iterator = { value: context[keys[iteration]], done: false };

            iteration = iteration + 1;

            return iterator;
          }

          return { value: undefined, done: true };
        },
      };
    },
  };
  // const iter = user.gen();

  // console.log(iter.next());
  // console.log(iter.next());
  // console.log(iter.next());
  // console.log(iter.next());
  // console.log(iter.next());

  // for (const key of user) {
  //   console.log(key);
  // }
})();
