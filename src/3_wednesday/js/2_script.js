(function wednesday_2() {
  const users = {
    data: [],
    setData(data) {
      this.data = data;
    },
    getData() {
      return this.data;
    },
  };

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
      users.setData(res);
    })
    .then(() => {
      users.getData().forEach(todo => {
        const div = document.createElement('div');

        div.id = todo.id;
        div.innerHTML = todo.name;
        div.style.color = 'white';
        document.querySelector('.common-container').append(div);
      });
    });
})();
