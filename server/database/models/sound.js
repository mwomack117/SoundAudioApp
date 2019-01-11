const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define userSchema
const SoundSchema = new Schema({
  soundId: { type: Number }
});

const Sounds = mongoose.model("Sounds", SoundSchema);

// Export the Note model
module.exports = Sounds;
