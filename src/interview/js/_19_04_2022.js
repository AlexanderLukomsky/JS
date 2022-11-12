(function _19_04_2022() {
  const foo = () => {
    console.log(bar);
    {
      var bar = 5;
    }
  };

  //  foo();

  const foo2 = () => {
    console.log(bar);
    {
      let bar = 5;
    }
  };

  //  foo2();

  const foo3 = () => {
    console.log(bar);
    {
      function bar() {
        console.log('bar');
      }
    }
  };

  // foo3();

  const a = {};
  const b = {};
  const c = {};

  Object.setPrototypeOf(a, b);

  // console.log(b.__proto__ === c.__proto__); //true
  // console.log(a.__proto__ === b.__proto__); //false
  // console.log(a.__proto__ === b); //true

  const aa = {
    name: 'aa',
  };

  Object.defineProperty(aa, 'getName', {
    value: function () {
      console.log(this.name);
    },
    // enumerable: true,
  });
  const bb = Object.assign({}, aa, { name: 'bb' });
  const cc = Object.create(aa, {
    name: {
      value: 'cc',
    },
  });

  //  aa.getName();
  // bb.getName();
  // cc.getName();
})();
