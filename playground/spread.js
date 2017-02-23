// function add (a, b) {
//     return a + b
// }

// console.log(add(3, 1))

// let toAdd = [9, 5]
// console.log(add(toAdd[0], toAdd[1]))

// // spread operator
// console.log('spread', add(...toAdd))



// let groupA = ['Astrid', 'Anthony']
// let groupB = ['Julian', 'Mira']
// let final = [3, ...groupA, ...groupB]

// console.log(final)


let person = ['Astrid', 35]
let personB = ['Anthony', 19]
// Hi [name], you are [age]
function greeting (name, age) {
    return 'Hi ' + name + ', you are ' + age
}
console.log(greeting(...person))
console.log(greeting(...personB))


let names = ['Mira', 'Julian']
let group = ['Clint', ...names]

group.map(function (name) {
    console.log('Hi', name)
})

