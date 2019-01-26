const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define userSchema
const SoundSchema = new Schema({
  soundId: { type: Number },
  preview: { type: String },
  user_id: { type: String },
  name: { type: String },
  image: { type: String }
});

const Sounds = mongoose.model("Sounds", SoundSchema);

// Export the Note model
module.exports = Sounds;
