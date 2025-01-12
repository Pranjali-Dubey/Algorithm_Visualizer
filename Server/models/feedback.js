// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const FeedbackModel = require("./models/feedback"); // Ensure the filename is lowercase if needed

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/feedback", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// // Submit Feedback route
// app.post("/feedback", (req, res) => {
//     const { name, email, rating, comment } = req.body;

//     FeedbackModel.create({ name, email, rating, comment })
//         .then((feedback) => res.json({ status: "Success", feedback }))
//         .catch((err) => res.json({ status: "Error", message: err.message }));
// });

// // Get all feedbacks route (Optional)
// app.get("/feedback", (req, res) => {
//     FeedbackModel.find()
//         .then((feedbacks) => res.json({ status: "Success", feedback }))
//         .catch((err) => res.json({ status: "Error", message: err.message }));
// });

// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });

// File path: your_project_folder/models/Feedback.js

// File path: your_project_folder/models/Feedback.js





const mongoose = require("mongoose");

// Define Feedback schema
const FeedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please fill a valid email address",
        ],
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create and export Feedback model
const FeedbackModel = mongoose.model('Feedback', FeedbackSchema, 'feedbacks');
// Feedback collection name: 'feedbacks'

module.exports = FeedbackModel; // Export the model to use in other files




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// //const FeedbackModel = require("./models/Feedback"); // Feedback Model

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection for Feedback
// mongoose
//     .connect("mongodb://127.0.0.1:27017/signup", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("Connected to MongoDB 'signup' database"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// // Feedback Route - Submit Feedback
// app.post("/feedback", async(req, res) => {
//     const { name, email, rating, comment } = req.body;

//     try {
//         if (!name || !email || !rating || !comment) {
//             return res.status(400).json({ status: "Error", message: "All fields are required" });
//         }

//         const feedback = new FeedbackModel({ name, email, rating, comment });
//         await feedback.save();

//         return res.json({ status: "Success", message: "Feedback submitted", feedback });
//     } catch (err) {
//         console.error("Error saving feedback:", err);
//         return res.status(500).json({ status: "Error", message: err.message });
//     }
// });

// // Feedback Route - Get All Feedback
// app.get("/feedback", async(req, res) => {
//     try {
//         const feedbacks = await FeedbackModel.find();
//         return res.json({ status: "Success", feedbacks });
//     } catch (err) {
//         console.error("Error fetching feedbacks:", err);
//         return res.status(500).json({ status: "Error", message: err.message });
//     }
// });

// // Start Server
// app.listen(3002, () => {
//     console.log("Feedback server is running on port 3002");
// });