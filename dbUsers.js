import { Double } from 'bson';
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    imageUrl: String,
    age: Double,
    about: String
})

export default mongoose.model("users", userSchema);