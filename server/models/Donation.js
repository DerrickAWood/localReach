import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Donation = new Schema(
  {
    creatorEmail: { type: String, lowercase: true},
    // payment: {type: String},
    amount: {type: Number, required: true},
    userId: {type: ObjectId, ref: "Profile", required: true},
    // organizationId: {type: ObjectId, ref: "Organization", required: true},
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Donation;
