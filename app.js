//  Iterator example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Create an array of name
const namesArr = ["jack", "jill", "john"];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

// ------------------------------------------------

// Generator example - function* shows that it's a generator
function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ------------------------------------------------

// Generator example2-> ID Creator

function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
