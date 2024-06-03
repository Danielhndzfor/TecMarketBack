import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://danielhernandezfor:aXvyiAVjB7cnGsh8@cluster0.btu4yyp.mongodb.net/');
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
