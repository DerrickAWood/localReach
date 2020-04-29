import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Organization = new Schema(
  {
    // payment: {type: String},
    // userId: {type: ObjectId, ref: "Profile", required: true},
    // organizationId: {type: ObjectId, ref: "Organization", required: true},

    name: { type: String, required: true },
    picture: { type: String },
    address: {type: String},
    payment: {type: String},
    banned: {type: Boolean, default: false},
    active: {type: Boolean, default: false},
    validated: {type: Boolean, default: false},
    creatorEmail: {type: String, lowercase: true, required: true},
    organizationEmail: {type: String, lowercase: true, unique: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Organization;
