// let myName = "Gopal   "
// let myChannel = "Chai   "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spriderman: "sling",

  getspiderman: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.gopal = function () {
  console.log(`Gopal is present in all object`);
};

Array.prototype.heyGopal = function () {
  console.log(`Gopal says hello`);
};

// heroPower.gopal()
// myHeros.gopal();
// myHeros.heyGopal();
// heroPower.heyGopal()

// inheritance

const user = {
    name:"chai",
    password:123,
}

const Teacher = {
  makeVideo: true,
};

const TeacherSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssigement: "js assisgement",
  fullTime: true,
  __proto__:TeacherSupport
};

Teacher.__proto__ = user


// modern syntax

Object.setPrototypeOf(TeacherSupport ,Teacher)


let anotherusername = "ChaiAurCode      "

String.prototype.truLenght = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True lenght is ${this.trim().length}`);
}

anotherusername.truLenght()
"Gopal".truLenght()
"iceTea".truLenght()