let moment = require('moment')

console.log(moment().format())


//unix timestamp
let now = moment()
console.log(now.unix())

let timestamp = now.unix()
let currentMoment = moment.unix(timestamp)
console.log(currentMoment.format())

console.log(currentMoment.format('MMM'))
