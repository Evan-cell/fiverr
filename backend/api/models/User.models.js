import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    country: {
        type: String,
        required: false,
        
    },
    desc: {
        type: String,
        required: false,
        
    },
    isSeller: {
        type: Boolean,
        default: false,
        
    },
    phone: {
        type: String,
        required: true,
        
    },
    image: {
        type: String,
        required: false,
        
    },
    password: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
       
    }
},{
    timestamps: true,
});

export default mongoose.model("User", userSchema)