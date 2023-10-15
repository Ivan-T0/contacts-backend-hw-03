const app = require('./app')

const mongoose = require("mongoose");
const {BD_HOST} = process.env

mongoose.connect(BD_HOST).then(() => {
  app.listen(3000)
}).catch(error => {
  console.log(error)
  process.exit(1)
})



