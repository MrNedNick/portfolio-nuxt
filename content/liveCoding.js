// prototypes-demo.js

console.log("=== PROTOTYPAL INHERITANCE DEMO ===");

// 1. Родительский объект (прототип)
const animal = {
  eats: true,
  walk() {
    console.log("[animal] Animal walks");
  }
};

console.log("animal.eats =", animal.eats); // true

// 2. Создаём объект dog, который наследует от animal
const dog = Object.create(animal); // связываем через прототип
dog.bark = function () {
  console.log("[dog] Woof!");
};

console.log("\n--- DOG OBJECT ---");
console.log("dog.eats =", dog.eats); // получено по цепочке от animal
dog.walk(); // вызов метода animal
dog.bark(); // свой собственный метод

// 3. Проверим прототип вручную
console.log("\n--- PROTOTYPE CHAIN ---");
console.log("dog.__proto__ === animal:", dog.__proto__ === animal); // true

// 4. Добавим ещё один уровень наследования
const husky = Object.create(dog);
husky.color = "white";

console.log("\n--- HUSKY OBJECT ---");
console.log("husky.eats =", husky.eats);   // унаследовано от animal
console.log("husky.color =", husky.color); // своё
husky.walk();  // animal
husky.bark();  // dog

// 5. Прототипная цепочка
дд
console.log("husky -> dog -> animal -> null");
console.log("husky.__proto__ === dog:", husky.__proto__ === dog);           // true
console.log("dog.__proto__ === animal:", dog.__proto__ === animal);        // true
console.log("animal.__proto__ === Object.prototype:", animal.__proto__ === Object.prototype); // true
console.log("Object.prototype.__proto__ === null:", Object.prototype.__proto__ === null);     // true

