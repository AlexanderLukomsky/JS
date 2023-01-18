(function tuesday_1() {
  const names = ['Alex', 'Donald', 'игорь', 'Bob', '', 'david'];
  const numbers = [-100, 1000, -9, 50]; //eslint-disable-line no-magic-numbers

  const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
  const sortedNames2 = [...names].sort((a, b) =>
    a.toLowerCase() < b.toLowerCase() ? -1 : 1,
  );

  numbers.sort((a, b) => a - b);

  const users = [
    { name: 'Jon', city: 'LA', scores: 80, age: -15 },
    { name: 'Jon', city: 'LA', scores: 80, age: 21 },
    { name: 'Dima', city: 'Brest', scores: 65, age: 15 },
    { name: 'David', city: 'NY', scores: 55, age: 25 },
    { name: 'Jon', city: 'LA', scores: 80, age: 99 },
    { name: 'Jon', city: 'LA', scores: 80, age: 55 },
    { name: 'Alex', city: 'Minks', scores: 70, age: 32 },
  ];

  const sortedUsers = [...users].sort((a, b) => a.age - b.age);

  const badSortUsers = () => {
    const newUsers = [...users];

    for (let i = 0; i < newUsers.length - 1; ) {
      console.log('i');
      if (newUsers[i].age > newUsers[i + 1].age) {
        [newUsers[i], newUsers[i + 1]] = [newUsers[i + 1], newUsers[i]];
        i = 0;
      } else {
        i++;
      }
    }

    return newUsers;
  };

  const sortUsers = () => {
    const newUsers = [...users];

    for (let i = 0; i < newUsers.length - 1; i++) {
      let isSorted = true;

      for (let j = 0; j < newUsers.length - 1 - i; j++) {
        console.log('ii');
        if (newUsers[j].age > newUsers[j + 1].age) {
          isSorted = false;
          [newUsers[j], newUsers[j + 1]] = [newUsers[j + 1], newUsers[j]];
        }
      }

      if (isSorted) {
        return newUsers;
      }
    }
  };
  const nums = [5, 1, 7, 4]; //eslint-disable-line no-magic-numbers
  const likeReduce = (array, callback, initValue) => {
    let flag = initValue !== undefined ? 0 : 1;
    let acc = initValue !== undefined ? initValue : array[0];

    for (flag; flag < array.length; flag++) {
      acc = callback(acc, array[flag]);
    }

    return acc;
  };
  const callback = (acc, elem) => {
    acc.push(elem + 1);

    return acc;
  };

  // console.log([5, 1, 7, 4].reduce((a, b) => a + b, 1));
  //  console.log(likeReduce(nums, callback, []));

  const arr3 = [1, 2, 3, 4, 4, 3, 6, 1, 4, 5, 9];

  const sortedArr = array => {
    const unique = [];
    const obj = {};

    for (let i = 0; i < array.length; i++) {
      const currentElement = array[i];

      if (!(currentElement in obj)) {
        obj[currentElement] = 1;
      } else {
        obj[currentElement] += 1;
      }
    }
    Object.keys(obj).forEach(key => {
      if (obj[key] === 1) {
        unique.push(+key);
      }
    });

    return unique;
  };

  //console.log(sortedArr(arr3));

  const str = '((((()))))({})[][{()}]';
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];

  const checkCompliance = str => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
        stack.push(str[i]);
      } else {
        if (stack.length) {
          const lastElement = stack.pop();

          if (obj[lastElement] !== str[i]) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    if (stack.length) {
      return false;
    }

    return true;
  };

  //console.log(checkCompliance(str));

  const date = new Date().getFullYear();

  console.log(date);
})();
