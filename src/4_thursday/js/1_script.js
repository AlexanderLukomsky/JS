(function thursday_1() {
  const car = {
    wheelCount: 4,
    showModel() {
      console.log(this.model);
    },
  };
  const ford = {
    model: 'Ford',
  };
  const bmw = {
    model: 'BMW',
  };

  Object.setPrototypeOf(ford, car);
  //ford.showModel();
  // console.log(ford.wheelCount);

  Object.setPrototypeOf(bmw, car);
  // bmw.showModel();
  // console.log(bmw.wheelCount);
  const prototypeCreator = (obj, prototype) => Object.setPrototypeOf(obj, prototype);
  const user = {
    showName() {
      console.log(this.name);
    },
  };
  const alex = prototypeCreator({ name: 'Alex' }, user);
  const hanna = prototypeCreator({ name: 'Hanna' }, user);

  // alex.showName();
  // hanna.showName();

  function Human(name) {
    this.name = name;
  }
  Human.prototype.showName = function () {
    console.log(this.name);
  };
  const jon = new Human('Jon');
  const david = new Human('David');

  // jon.showName();
  // user.showName.call(david);
})();
