import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://danielhernandezfor:R0JZ1MpcAIaPKsvP@tecmarket.j5oluho.mongodb.net/');
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
