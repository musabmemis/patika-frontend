var slugify = require('slugify');

const title = slugify("some string");

const den = slugify("Her nefis ölümü tadacaktır.")

const ben = slugify("Bir gün mutlaka ", "!")

console.log(title);
console.log(den);
console.log(ben);


console.log("deneme");