import mongoose, { Schema } from 'mongoose';

// Define movie schema
var userSchema = new Schema({
  firstname: String,
  lastname: String,
  avatar: String,
  email: String,
  mobile: String
}, {
	versionKey: false
});

// Export Mongoose model
export default mongoose.model('user', userSchema);