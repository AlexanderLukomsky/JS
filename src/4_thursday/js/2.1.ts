///Types
//public
class publicUser {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
const pub = new publicUser('pub');
pub.getName();
// protected,

class protectedUser {
  protected readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected getName(): string {
    return this.name;
  }
}

class heirProtected extends protectedUser {
  getName2() {
    this.getName();
  }
}
const heir = new heirProtected('heir');
// heir.name error

//private | readonly

class privateUser {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  private getName(): string {
    return this.name;
  }
}

class Example {
  constructor(
    public name: string,

    public age: number,

    public readonly id: string,
  ) {}
}

interface Engine {
  model: string;
  run: () => void;
}

class V6 implements Engine {
  model = 'V6';

  run() {}
}

class Car {
  engine: V6;

  constructor(engine: Engine) {
    this.engine = engine;
  }
}

new Car(new V6());
