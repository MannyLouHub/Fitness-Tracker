const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: "Enter Name",
  },
  type: {
    type: String,
    trim: true,
    require: "Enter Type",
  },
  weight: {
    type: Number,
  },
  set: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;