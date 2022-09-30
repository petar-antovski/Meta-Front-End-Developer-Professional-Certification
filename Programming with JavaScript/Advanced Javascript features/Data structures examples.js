// The forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${fruit}`);
});

// The filter() method
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

// The map() method
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

// Maps don't have inheritance. No prototypes!
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// Sets are a collection of unique values
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

