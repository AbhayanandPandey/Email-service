const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema
({
    email:
    {
        type:String,
        required:true,
        unique:true
    }
});
const otp =
    {
        oppt:''
    };
async function verifyOTP() {
    
    inputs.forEach(input => otp += input.value);
}

const Register = new mongoose.model('UserEmailData',UserSchema);
module.exports = Register;
module.exports = otp.oppt
