// Определим объект и универсальную функцию
const user = {
  name: "Nikita",
};

function introduce(role, city) {
  console.log("this:", this);
  console.log(`Hello, my name is ${this.name}.`);
  console.log(`I'm a ${role} from ${city}.`);
  console.log("--------------------------");
}

// --- call ---
console.log(">>> CALL");
introduce.call(user, "Frontend Developer", "Prague");

// --- apply ---
console.log(">>> APPLY");
introduce.apply(user, ["Frontend Developer", "Prague"]);

// --- bind ---
console.log(">>> BIND");
const boundIntroduce = introduce.bind(user, "Frontend Developer", "Prague");

console.log("Function not called yet (bind):");
console.log(boundIntroduce); // покажет функцию, а не результат

console.log("Now calling the bound function:");
boundIntroduce();

console.log(">>> DONE");
