const app = require('./app')
const BD_HOST = require("./config")
const mongoose = require("mongoose");


// mongoose.set('stringQuery', true)
mongoose.connect(BD_HOST).then(() => {
  app.listen(3000)
}).catch(error => {
  console.log(error)
  process.exit(1)
})



