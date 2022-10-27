(function monday_2() {
  const users = [
    { name: 'Alex', city: 'Minks', scores: 70 },
    { name: 'David', city: 'NY', scores: 55 },
    { name: 'Jon', city: 'LA', scores: 80 },
    { name: 'Dima', city: 'Brest', scores: 65 },
  ];
  const names = users.map(u => u.name);

  const getUsersName = user => user.name;
  const getUsersScores = user => user.scores;
  const setIsStudent = user => ({ ...user, isStudent: true });

  const likeMap = (arr, callback) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      newArr[i] = callback(arr[i]);
    }

    return newArr;
  };

  const filterUsersName = user => user.name === 'Alex';
  const filterUsersScores = user => user.scores === 80;
  const filterUserCity = user => user.city === 'NY';

  const likeFilter = (arr, callback) => {
    const newArr = [];
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        newArr[index] = arr[i];
        index++;
      }
    }

    return newArr;
  };

  const likeFind = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
  };
  const likePush = (arr, el) => {
    arr[arr.length] = el; // eslint-disable-line no-param-reassign
    // arr.splice(arr.length, -1, el);

    return arr.length;
  };

  const likeIndexOf = (arr, el) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === el) {
        return i;
      }
    }

    return -1;
  };
})();
