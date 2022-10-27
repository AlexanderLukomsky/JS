(function monday_4() {
  const r_id = () =>
    String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, ''); //eslint-disable-line no-magic-numbers

  const todoListID_1 = r_id();
  const todoListID_2 = r_id();
  const todoListID_3 = r_id();

  const todoLists = [
    { id: todoListID_1, title: 'todo 1', filter: false },
    { id: todoListID_2, title: 'todo 2', filter: true },
    { id: todoListID_3, title: 'todo 3', filter: false },
  ];

  const tasks = {
    [todoListID_1]: [
      { id: r_id(), title: 'task 1', filter: true, priority: 15 },
      { id: r_id(), title: 'task 1', filter: false, priority: 76 },
      { id: r_id(), title: 'task 1', filter: false, priority: 10 },
    ],
    [todoListID_2]: [
      { id: r_id(), title: 'task 2', filter: false, priority: 45 },
      { id: r_id(), title: 'task 2', filter: true, priority: 78 },
      { id: r_id(), title: 'task 2', filter: false, priority: 20 },
    ],
    [todoListID_3]: [
      { id: r_id(), title: 'task 3a', filter: false, priority: 16 },
      { id: r_id(), title: 'task 3b', filter: false, priority: 77 },
      { id: r_id(), title: 'task 3c', filter: true, priority: 21 },
      { id: r_id(), title: 'task 3d', filter: true, priority: 55 },
    ],
  };

  const numbers = [4, 1, 2, 8, 15, 10]; //eslint-disable-line no-magic-numbers

  const sum = numbers.reduce((acc, element) => acc + element, 0);
  const max = numbers.reduce((acc, element) => (acc > element ? acc : element));
  const min = numbers.reduce((acc, element) => (acc > element ? element : acc));

  const maxPriority = tasks[todoListID_3].reduce((acc, element) =>
    acc.priority > element.priority ? acc : element,
  );

  const incrementPriorityUsers = tasks[todoListID_3].reduce((acc, element) => {
    const updatedUser = { ...element, priority: element.priority + 10 };

    acc.push(updatedUser);

    return acc;
  }, []);

  const filterUsersPriority = tasks[todoListID_3].reduce((acc, element) => {
    //eslint-disable-next-line no-magic-numbers
    if (element.priority > 30) {
      acc.push(element);
    }

    return acc;
  }, []);

  const createObject = tasks[todoListID_3].reduce((acc, element) => {
    const newElement = { ...element };

    delete newElement.title;

    return { ...acc, [element.title]: { ...newElement } };
  }, {});

  const justTestReduce = (object, value) => {
    const objectKeys = Object.keys(object);
    let result = {};
    const maxUserPriority = objectKeys.reduce((acc, key) => {
      const max = tasks[key].reduce((acc, task) =>
        acc[value] > task[value] ? acc : task,
      );

      if (max[value] > acc[value]) {
        result = { ...max };
      }

      return result;
    }, object[objectKeys[0]][0]);

    return maxUserPriority;
  };
})();
