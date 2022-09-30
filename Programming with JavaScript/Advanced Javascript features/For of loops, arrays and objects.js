// Arrays are iterable and the for of loop can be used directly
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

// Objects are not iterable and to use the for of loop you need to use one of the three built-in methods: Object.keys(), Object.values(), and Object.entries().
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}