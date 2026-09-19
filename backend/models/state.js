// const mongoose = require("mongoose");

// const stateSchema = new mongoose.Schema({
//   name: String,
//   image: String,
//   description: String,
//   festivals: [String],
//   food: [String],
//   traditions: [String],
//   culture: [String],
//   music: [String],
//   arts: [String],
//   dance: [String],
//   heritage: [String]
// });

// module.exports = mongoose.model("State", stateSchema);


// const mongoose = require("mongoose");

// const mediaSchema = new mongoose.Schema(
//   {
//     name: String,
//     image: String,
//     video: String,
//     poster: String,
//     desc: String,
//     icon: String
//   },
//   { _id: false }
// );

// const stateSchema = new mongoose.Schema({
//   name: String,

//   image: String,

//   description: String,

//   festivals: [mediaSchema],

//   food: [mediaSchema],

//   traditions: [mediaSchema],

//   culture: [mediaSchema],

//   music: [mediaSchema],

//   arts: [mediaSchema],

//   dance: [mediaSchema],

//   heritage: [mediaSchema],

//   art: [mediaSchema]
// });

// module.exports = mongoose.model("State", stateSchema);

const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    video: String,
    poster: String,
    desc: String,
    icon: String
  },
  { _id: false }
);

const stateSchema = new mongoose.Schema({
  name: String,

  image: String,

  description: String,

  festivals: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  food: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  traditions: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  culture: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  music: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  arts: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  art: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  dance: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  heritage: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  }
});

module.exports = mongoose.model("State", stateSchema);