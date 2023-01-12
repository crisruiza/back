const { Schema, model } = require("mongoose");

const ProductScheema = Schema(
  {
    id: {
      type: Number,
      required: [true, "ID is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    descrption: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    img: {
      type: String,
      required: [true, "Image is required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false }
);

module.exports = model("Product", ProductScheema);
