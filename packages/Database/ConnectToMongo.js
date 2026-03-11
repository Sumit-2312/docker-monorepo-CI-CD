import mongoose from 'mongoose';

async function Connect(){
    await mongoose.connect(process.env.MONGO_URL);
}

export default Connect;