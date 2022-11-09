(function thursday_2() {
  class Car {
    wheelCount = 4;

    constructor(model, test, test2, test3) {
      this.model = model;
    }

    start() {
      console.log(`${this.model} start`);
    }
  }
  const ford = new Car('Ford');

  //  console.log(ford);
  //  ford.start();
  //
  class Car2 {
    static staticMethod() {
      console.log('static method');
    }
  }
  // Car2.staticMethod();

  class User {
    static nameLength = 5;

    static validateUserName(name) {
      return name.trim().length < this.nameLength;
    }
    constructor(name) {
      if (User.validateUserName(name)) {
        this.name = name;
      } else {
        console.warn('error');
      }
    }
  }

  // const david = new User('david');

  class PrivateFields {
    #private = `Don't touch`;
    get method() {
      console.log(this.#private);
    }

    set method(value) {
      console.log(value);
      //  this.#private = value;
    }
  }
  const obj = new PrivateFields();

  //obj.method;
  // obj.method = '123';

  class Human {
    #race = 'Human';
    constructor(gender) {
      this.gender = gender;
    }
    say() {
      console.log('Hi');
    }
    get race() {
      console.log(this.#race);
    }
  }
  class Women extends Human {
    constructor(gender) {
      super(gender);
    }
    womenSay = super.say;
  }
  const female = new Women('female');

  // console.log(female);
  // female.race;
  // female.womenSay();
})();
