// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Gopal",
      lastname: "Prasad",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

const users = [
  {
    id: 1,
    email: "ddd@gmail.com",
  },
  {
    id: 1,
    email: "ddd@gmail.com",
  },
  {
    id: 1,
    email: "ddd@gmail.com",
  },
  {
    id: 1,
    email: "ddd@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "chai or code",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructo: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "Gopal")

// {
//     "name": "Gopal",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]
