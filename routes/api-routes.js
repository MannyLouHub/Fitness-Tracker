const workout = require("../models/Workout")


module.exports = function (app) {
app.get("/api/workouts", (req, res) => {
  workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});
}