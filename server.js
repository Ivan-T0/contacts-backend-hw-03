const app = require('./app')
const {BD_HOST} = process.env
const mongoose = require("mongoose");

console.log()
// mongoose.set('stringQuery', true)
mongoose.connect(BD_HOST).then(() => {
  app.listen(3000)
}).catch(error => {
  console.log(error)
  process.exit(1)
})



