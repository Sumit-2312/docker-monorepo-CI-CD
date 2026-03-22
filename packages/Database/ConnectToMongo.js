import mongoose from 'mongoose';

async function Connect(){
    console.log("MONGO_URL inside connect:", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
}

export default Connect;