const mongoose = require("mongoose");

const newpostSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    createdAt: { type: Date, default: Date.now },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

module.exports = mongoose.model("newpost", newpostSchema);