const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesModel = new Schema({
  // CODE HERE
  day: {
    type: Date, 
    default: Date.now
  },
  exercises: {
    type: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
},

});

const Workout = mongoose.model("exercises", exercisesModel);

module.exports = Workout;