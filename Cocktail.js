const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cockTailSchema = new Schema(
  {
    strDrink: {
      type: String,
    },
    strInstructions: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Cocktail", cockTailSchema);
