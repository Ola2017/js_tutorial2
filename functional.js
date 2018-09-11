let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota" ]; //Skapar arrayen states

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

//urls: Imperative version
function imperativeUrls(elements) { //skapar funktionen imperativeUrls med attributet elements
  let urls = []; //skapar tom array urls
  // push lägger till element i slutet av array. /\s/ är som" " men täcker alla typer; tab, line feed, carraige return etc
  elements.forEach(function(element) { 
      urls.push(urlify(element)); 
  }); 
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
} // returns it only returns single states from the function
console.log(functionalSingles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: Imperative solution, this adds numbers tot total sum
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
      return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
      let lengths = {};
      elements.forEach(function(element) {
            lengths[element] = element.length;
      });
      return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));