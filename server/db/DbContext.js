import mongoose from "mongoose";
import ValueSchema from "../models/Value";
// import BugSchema from "../models/Bug";
// import NoteSchema from "../models/Note";
import ProfileSchema from "../models/Profile";
import DonationSchema from "../models/Donation"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  // Bugs = mongoose.model("Value", BugSchema);
  // Notes = mongoose.model("Value", NoteSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Donations = mongoose.model("Donation", DonationSchema);
}

export const dbContext = new DbContext();
