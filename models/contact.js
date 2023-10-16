
const {handleMongooseModel } = require("../helpers")
const { Schema, model } = require("mongoose")
const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    favofite: {
        type: Boolean,
        default: false
    }
})
contactSchema.post("save",handleMongooseModel )

const Contact = model("contact", contactSchema)
console.log(Contact)
module.exports = Contact;