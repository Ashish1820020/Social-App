const mongoose = require("mongoose");

const commentSchema =  mongoose.Schema({

    content: {
      type: String,
      required: true,
      trim: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },

    post: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comments", commentSchema);