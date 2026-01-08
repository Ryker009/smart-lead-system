import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  country: String,
  probability: Number,
  status: String,
  synced: { type: Boolean, default: false },
});

export default mongoose.model("Lead", leadSchema);
