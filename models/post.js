const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const post = new Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", post);
