const app = require("express").Router();
const Workout = require("../models/workouts.js");

// Create a new workout DONE 
app.post("/api/workouts", ({ body }, res) => {
  console.log("Creating a new workout")
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

 // Read last workout - DONE 
 app.get("/api/workouts", (req, res) => {
  console.log("Reading workout")
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Add an exercise - DONE
app.put("/api/workouts/:id", (req, res) => {
  console.log("Adding an exercise")
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: {exercises: req.body}},
    { new: true}
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});




// Gets daily workouts and aggregates into charts. Not clear how this is different from app.post("/api/workouts"
app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = app;