const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Submission =
require("./models/Submission");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch(err => {
    console.log(err);
});

app.post("/api/contact", async (req, res) => {

    const submission =
        await Submission.create(req.body);

    res.json({
        message: "Saved Successfully",
        submission
    });

});

app.listen(5000, () => {
    console.log("Server Running");
});
app.get("/api/submissions", async (req, res) => {
    const data = await Submission.find();
    res.json(data);
});
app.get("/api/submissions", async (req, res) => {
    try {
        const data = await Submission.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});