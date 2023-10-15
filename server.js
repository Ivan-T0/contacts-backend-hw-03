const app = require('./app')

const mongoose = require("mongoose");
const BD_HOST = "mongodb+srv://Ivan:L6IE1nbQpfP448Hf@cluster0.arvz5tf.mongodb.net/?retryWrites=true&w=majority"

// mongoose.set('stringQuery', true)
mongoose.connect(BD_HOST).then(() => {
  app.listen(3000)
}).catch(error => {
  console.log(error)
  process.exit(1)
})



