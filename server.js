const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

console.log("Serving file from:", path.join(__dirname, "public", "easy.html"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "easy.html"));
});

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/gameDB", { dbName: "gameDB" })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    experience: { type: Number, default: 0 }
});

const User = mongoose.model("User", userSchema);

// Update Experience Points
app.post("/update/XP", async (req, res) => {
    const { username, difficulty } = req.body;

    console.log("Received request to update XP");
    console.log("Request body:", req.body);

    if (!username || !difficulty) {
        console.log("Missing username or difficulty");
        return res.status(400).json({ error: "Missing username or difficulty" });
    }

    let xpMap = { easy: 3, average: 5, difficult: 10 };
    let expPoints = xpMap[difficulty] || 0;

    if (expPoints === 0) {
        console.log("Invalid difficulty level provided:", difficulty);
        return res.status(400).json({ error: "Invalid difficulty level" });
    }

    try {
        console.log(`Updating XP for ${username}, Difficulty: ${difficulty}, XP to add: ${expPoints}`);

        let user = await User.findOne({ username });

        if (!user) {
            console.log("User not found, creating new user...");
            user = new User({ username, experience: expPoints });
        } else {
            console.log("User found, updating XP...");
            user.experience += expPoints;
        }

        await user.save();
        console.log("Updated user data:", user);

        res.json({ message: "EXP Updated!", user });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: "Database error" });
    }
});

// Get user experience points
app.get("/user/:username", async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ experience: user.experience });
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
});

// Start the server
const PORT = 2090;
app.listen(PORT, () => console.log(`Server running on port 2090`));
