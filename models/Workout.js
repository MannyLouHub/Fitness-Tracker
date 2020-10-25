const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Number,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercises"
    }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;