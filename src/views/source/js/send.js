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
        oppt:'1234'
    };
const inputs = document.querySelectorAll('.otp-container input');
async function verifyOT() {
    otp.oppt = ''
    inputs.forEach(input => otp.oppt += input.value);
}

const Register = new mongoose.model('UserEmailData',UserSchema);
module.exports = Register;
module.exports = otp.oppt
