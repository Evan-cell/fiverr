import mongoose from 'mongoose';
const { Schema } = mongoose;

const gigSchema = new Schema({
    userId:{
        type: String,
        required:true,
    },
    title:{
        type: String,
        required:true,
    },
    desc:{
        type: String,
        required:true,
    },
    totalStars:{
        type: Number,
        default:0,
    },
    starNumber:{
        type: Number,
        default:0,
    },
    cat:{
        type: Number,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    cover:{
        type: String,
        required:true,
    },
    image:{
        type: [String],
        required:true,
    },
    shortTitle:{
        type: String,
        required:true,
    },
    shortDesc:{
        type: String,
        required:true,
    },
    deliveryTime:{
        type: Number,
        required:true,
    },
    revisionTime:{
        type: Number,
        required:true,
    },
    features:{
        type: [String],
        required:true,
    },
    salesNumber:{
        type: Number,
        default:0
    }
},{
    timestamps: true,
});

export default mongoose.model("Gig", gigSchema)