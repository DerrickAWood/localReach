import mongoose from "mongoose";
import ValueSchema from "../models/Value";
// import BugSchema from "../models/Bug";
// import NoteSchema from "../models/Note";
import ProfileSchema from "../models/Profile";
import DonationSchema from "../models/Donation"
import OrganizationSchema from "../models/Organization"


class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  // Bugs = mongoose.model("Value", BugSchema);
  // Notes = mongoose.model("Value", NoteSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Donations = mongoose.model("Donation", DonationSchema);
  Organizations = mongoose.model("Organization", OrganizationSchema);
}

export const dbContext = new DbContext();
