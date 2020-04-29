import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Organization = new Schema(
  {
    
    email: { type: String, lowercase: true, unique: true },
    // payment: {type: String},
    amount: {type: Number, required: true},
    userId: {type: ObjectId, ref: "Profile", required: true},
    // organizationId: {type: ObjectId, ref: "Organization", required: true},

    name: { type: String, required: true },
    picture: { type: String },
    address: {type: String},
    payment: {type: String},
    banned: {type: Boolean, default: false}
    active: {type: Boolean, default: false}
    
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Organization;
