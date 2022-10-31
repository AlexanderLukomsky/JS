(function tuesday_3() {
  let initState = { salary: 500 };

  const dispatch = action => {
    initState = salaryReduce(initState, action);
  };

  const salaryReduce = (state, action) => {
    switch (action.type) {
      case 'SUM':
        return { ...state, salary: state.salary + action.number };
      case 'MULT':
        return { ...state, salary: state.salary * action.number };
      case 'SUB':
        return { ...state, salary: state.salary - action.number };
      default:
        return state;
    }
  };
  const sum = number => ({ type: 'SUM', number });
  const mult = number => ({ type: 'MULT', number });
  const sub = number => ({ type: 'SUB', number });
})();
