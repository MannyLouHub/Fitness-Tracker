const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: String,
  type: String,
  weight: Number,
  set: Number,
  reps: Number,
  duration: Number,
});

const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;