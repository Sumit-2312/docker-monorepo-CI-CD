import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    username: {
        type : String,
        required: {
            value : true,
            message: "Username is required"
        }
    },
    password: {
        type: String,
        required:{
            type: true,
            message: "Password is required"
        }
    }
})

const userModel = model("Users",userSchema);

export default userModel;