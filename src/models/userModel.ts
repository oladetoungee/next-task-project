import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    }, {timestamps: true});

    //DELETE OLD MODEL IF IT EXISTS
    if (mongoose.models['users']) {
        const userModel = mongoose.model('users');
        mongoose.deleteModel(userModel.modelName);
    }
    const User = mongoose.model('User', userSchema);

    export default User;