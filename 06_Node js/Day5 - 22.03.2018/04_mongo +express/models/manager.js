const { mongoose } = require('./index');

let managerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3
    },
    userName: {
        type: String,
        required: true,
        minlength: 3,
        unique: true,

    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
      }]
})




let Manager = mongoose.model("Manager", managerSchema, "managers");
module.exports = {
    Manager
}


