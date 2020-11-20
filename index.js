// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];

console.log(`type of a ${(Array.isArray(a)) ? 'is' : "isn't"} an array`)
console.log(`type of b ${(Array.isArray(b)) ? 'is' : "isn't"} an array`)
// type of a isn't an array
// type of b is an array

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];

a = a.map(a => a * 2)
console.log(a)


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];

console.log(colors.join(' '))
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'))
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(','))


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];

console.log(a.sort((a, b) => b - a))


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

t = a.reduce((p, c) => {
    if (c in p)
        p[c]++;
    else
        p[c] = 1;
    return p
}, {})
let most_frequent = null
for (const k in t) {
    if (most_frequent == null || t[k] > most_frequent[1])
        most_frequent = [k, t[k]]
}
console.log(most_frequent[0])