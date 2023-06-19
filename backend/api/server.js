import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";

const app = express()
dotenv.config();
mongoose.set('strictQuery', true)

const connect = async () =>{
try {
    await mongoose.connect(process.env.mongo);
    console.log('connected')
  } catch (error) {
    console.log(error);
  }
};
app.use("/api/users",userRoute)
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.listen(3000, () => {
    connect()
    console.log('App listening on port 3000!');
});