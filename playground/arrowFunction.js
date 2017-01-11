var square = (x) => x*x;
console.log('Arrow: ',square(3));

var user = {
  name : 'Akhil',
  sayHi : () =>{
    console.log(arguments);
    console.log(`Hi! My name is ${this.name}`);
  },
  sayHiAlt (){
    console.log(arguments);
    console.log(`Hi! My name is ${this.name}`);
  }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
