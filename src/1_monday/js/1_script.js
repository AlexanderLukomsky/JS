(function monday_1() {
  const user = { name: 'Alex', city: 'Minsk' };
  const newUser = { ...user };
  const users = [
    { name: 'Alex', city: 'Minsk' },
    { name: 'David', city: 'NY' },
  ];
  const newUsers = [...users, ...users];
  const newUsers2 = newUsers.map(el =>
    el.city === 'Minsk' ? { ...el, city: 'NY' } : el,
  );
})();
