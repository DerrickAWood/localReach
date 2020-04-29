import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowercase: true, unique: true },
    picture: { type: String },
    subs: [{ type: String, unique: true }],
    // NOTE If you wish to add additional public properties for profiles do so here
    location: {type: String},
    payment: {type: String},
    default: {type: Number, default: 5},
    banned: {type: Boolean, default: false}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Profile;
