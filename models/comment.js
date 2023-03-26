const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const comment = new Schema({
  comment: { type: String, trim: true, required: true },
  postId: { type: Schema.Types.ObjectId, ref: "post" },
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", comment);
