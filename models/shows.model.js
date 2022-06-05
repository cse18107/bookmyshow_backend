const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name of the show"],
    min: [1, "{VALUE} should be greater then length of 1"],
  },
  typeOfShow: {
    type: String,
    enum: {
      values: ["Movie", "Stream", "Event", "Plays", "Sports"],
      default: "Movie",
      message: "{VALUE} type is not supported",
    },
  },
  interested: {
    type: Number,
    min: [0, "{VALUE} should be of length greater then 0"],
  },
  aboutMovie: {
    type: String,
    required: [true, "Please enter some description of the show"],
  },
  pictureQuality: {
    type: String,
    enum: {
      values: ["2D", "3D", "4DX 3D", "4DX", "IMAX 3D", "3D SCREEN X"],
      default: "2D",
      message: "{VALUE} is not type supported",
    },
  },
  background: {
    public_id: {
      type:String,
      required:true,
    },
    url: {
      type:String,
      required:true,
    }
  },
  poster:{
    public_id:{
      type:String,
      required:true,
    },
    url: {
      type: String,
      required:true,
    }
  },
  languages: {
    type: String,
    enum: {
      values: ["English", "Telugu", "Tamil", "Hindi"],
      message: "{VALUE} is not available",
    },
  },
  movieLength: {
    type: String,
    required: [true, "Please enter show length"],
  },
  releaseDate:{
    type:String,
    required:[true,'Please enter release date'],
  },
  showType: {
    type: String,
    enum: {
      values: ["Action", "Adventure", "Sci-Fi", "Thriller"],
      message: "{VALUE} type of show is not valid",
    },
  },
  cast: [
    {
      castMember: {
        type: mongoose.Schema.ObjectId,
        ref: "Cast",
      },
    },
  ],
  crew: [
    {
      crewMember: {
        type: mongoose.Schema.ObjectId,
        ref: "Crew",
      },
    },
  ],
});

const Show = mongoose.model('Show',showSchema);

module.exports = Show;