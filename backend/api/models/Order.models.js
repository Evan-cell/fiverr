import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    gigId:{
        type: String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
        
    },
    sellerId:{
        type: String,
        required: true,
        unique: true,
    },
    buyerId:{
        type:String,
        required:true,
        unique:true
    },
    isCompleted:{
        type:String,
        default:false,
    }

},{
    timestamps: true,
});

export default mongoose.model("Order", orderSchema)