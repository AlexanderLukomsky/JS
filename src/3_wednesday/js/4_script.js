(function wednesday_4() {
  const human = {
    say(text) {
      //  console.log(text);
    },
  };
  const alex = {};

  human.say.call(alex, 'Yo');

  const a = {
    name: 'A',
    getName() {
      console.log(this);
      console.log(this.name);
    },
  };

  // setTimeout(a.getName.bind(a), 100);

  const b = {
    isMale: true,
    age: 20,
    getIsMale: () => {
      return this.isMale;
    },
    getAge: function () {
      const age = 100;

      console.log(this.age);
    },
  };

  // console.log(b.getIsMale());
  //b.getAge();

  const c = {
    name: 'c',
  };
  const d = {
    name: 'd',
    getName: () => {
      (() => {
        console.log(this.name);
      }).call(c);
    },
  };

  // d.getName();
})();
