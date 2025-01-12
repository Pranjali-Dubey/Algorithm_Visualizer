// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const SigninModel = require("./models/User");
// const FeedbackModel = require("./models/feedback");

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB database named "signup"
// mongoose.connect("mongodb://127.0.0.1:27017/signup")
//     .then(() => console.log("Connected to MongoDB 'signup' database"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// // Login route with role-based redirect
// app.post("/login", async(req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await SigninModel.findOne({ email });

//         if (!user) {
//             return res.json({ status: "Error", message: "No user found with the provided email" });
//         }

//         if (user.password === password) {
//             return res.json({ status: "Success", user, dashboard: '/home' });
//         } else {
//             return res.json({ status: "Error", message: "The password is incorrect" });
//         }
//     } catch (err) {
//         return res.json({ status: "Error", message: err.message });
//     }
// });

// // Register route
// app.post("/signup", async(req, res) => {
//     try {
//         const newUser = await SigninModel.create(req.body);
//         return res.json({ status: "Success", newUser });
//     } catch (err) {
//         return res.json({ status: "Error", message: err.message });
//     }
// });

// // Route to submit feedback
// app.post("/feedback", async(req, res) => {
//     const { name, email, rating, comment } = req.body;

//     try {
//         const feedback = await FeedbackModel.create({ name, email, rating, comment });
//         return res.json({ status: "Success", feedback });
//     } catch (err) {
//         return res.json({ status: "Error", message: err.message });
//     }
// });

// // Route to get all feedback entries
// app.get("/feedback", async(req, res) => {
//     try {
//         const feedbacks = await FeedbackModel.find();
//         return res.json({ status: "Success", feedbacks });
//     } catch (err) {
//         return res.json({ status: "Error", message: err.message });
//     }
// });

// // Start server
// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });

















// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const SigninModel = require("./models/User");
// const FeedbackModel = require("./models/feedback");

// const app = express();
// app.use(express.json()); // Make sure body is parsed as JSON
// app.use(cors());

// // Connect to MongoDB database named "signup"
// mongoose.connect("mongodb://127.0.0.1:27017/signup")
//     .then(() => console.log("Connected to MongoDB 'signup' database"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// // Login route with role-based redirect
// app.post("/login", async(req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await SigninModel.findOne({ email });

//         if (!user) {
//             return res.json({ status: "Error", message: "No user found with the provided email" });
//         }

//         if (user.password === password) {
//             return res.json({ status: "Success", user, dashboard: '/home' });
//         } else {
//             return res.json({ status: "Error", message: "The password is incorrect" });
//         }
//     } catch (err) {
//         return res.json({ status: "Error", message: err.message });
//     }
// });

// // Register route
// app.post("/signup", async(req, res) => {
//     try {
//         const newUser = await SigninModel.create(req.body);
//         return res.json({ status: "Success", newUser });
//     } catch (err) {
//         return res.json({ status: "Error", message: err.message });
//     }
// });

// // Route to submit feedback
// app.post("/feedback", async(req, res) => {
//     const { name, email, rating, comment } = req.body;

//     try {
//         // Ensure all required fields are provided
//         if (!name || !email || !rating || !comment) {
//             return res.json({ status: "Error", message: "All fields are required" });
//         }

//         // Create new feedback entry
//         const feedback = await feedbackModel.create({ name, email, rating, comment });

//         return res.json({ status: "Success", feedback });
//     } catch (err) {
//         console.error('Error saving feedback:', err);
//         return res.json({ status: "Error", message: err.message });
//     }
// });

// // Route to get all feedback entries
// app.get("/feedback", async(req, res) => {
//     try {
//         const feedbacks = await FeedbackModel.find();
//         return res.json({ status: "Success", feedbacks });
//     } catch (err) {
//         return res.json({ status: "Error", message: err.message });
//     }
// });

// // Start server
// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });








const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SigninModel = require("./models/User"); // User model for signup/login
const FeedbackModel = require("./models/feedback"); // Feedback model for feedback data

const app = express();
app.use(express.json()); // Parse incoming JSON
app.use(cors());

// MongoDB connection to the 'signup' database
mongoose.connect("mongodb://127.0.0.1:27017/signup")
    .then(() => console.log("Connected to MongoDB 'signup' database"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Login route (users collection)
app.post("/login", async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await SigninModel.findOne({ email });

        if (!user) {
            return res.json({ status: "Error", message: "No user found with the provided email" });
        }

        if (user.password === password) {
            return res.json({ status: "Success", user, dashboard: '/home' });
        } else {
            return res.json({ status: "Error", message: "The password is incorrect" });
        }
    } catch (err) {
        return res.json({ status: "Error", message: err.message });
    }
});

// Register route (users collection)
app.post("/signup", async(req, res) => {
    try {
        const newUser = await SigninModel.create(req.body);
        return res.json({ status: "Success", newUser });
    } catch (err) {
        return res.json({ status: "Error", message: err.message });
    }
});

// Route to submit feedback (feedbacks collection)
app.post("/feedback", async(req, res) => {
    const { name, email, rating, comment } = req.body;

    try {
        // Ensure all required fields are provided
        if (!name || !email || !rating || !comment) {
            return res.json({ status: "Error", message: "All fields are required" });
        }

        // Save feedback data to the feedbacks collection
        const feedback = await FeedbackModel.create({ name, email, rating, comment });

        return res.json({ status: "Success", feedback });
    } catch (err) {
        console.error('Error saving feedback:', err);
        return res.json({ status: "Error", message: err.message });
    }
});

// Route to get all feedback entries (from feedbacks collection)
app.get("/feedback", async(req, res) => {
    try {
        const feedbacks = await FeedbackModel.find();
        return res.json({ status: "Success", feedbacks });
    } catch (err) {
        return res.json({ status: "Error", message: err.message });
    }
});

// Start server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});