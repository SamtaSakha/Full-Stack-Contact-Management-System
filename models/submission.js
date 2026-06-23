const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports =
mongoose.model("Submission", SubmissionSchema);