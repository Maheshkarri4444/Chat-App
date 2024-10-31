import mongoose, { trusted } from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type: String,
        required: true        
    }
    //creaetedAt , updatedAt
},{timestamps: true});

const Message = mongoose.model("Message",messageSchema);

export default Message