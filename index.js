class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  const myCat = new Cat('Whiskers', 'female');
  console.log(myCat.speak());
  
  const myDog = new Dog('Rex', 'male');
  console.log(myDog.speak());
  
  const myBird = new Bird('Polly', 'female');
  console.log(myBird.speak());
  
  const myMaleBird = new Bird('Charlie', 'male');
  console.log(myMaleBird.speak());
  