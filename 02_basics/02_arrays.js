const marvel = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// marvel.push(dc);
// console.log(marvel);

// const allHero = marvel.concat(dc);
// console.log(allHero);

const all_Hero = [...marvel, ...dc]
console.log(all_Hero);

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Gopal"))
console.log(Array.from("Gopal"))
console.log(Array.from({name: "Gopal"})) //intresting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));