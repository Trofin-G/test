const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create user
router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update user
router.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete user
router.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

// Rută POST pentru a adăuga un item
router.post("/add-user", async (req, res) => {
    try {
        // Creează un nou document folosind datele din req.body
        const newItem = new Item({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        // Salvează documentul în MongoDB
        const savedItem = await newItem.save();

        // Răspunde cu itemul salvat
        res.status(201).json(savedItem);
    } catch (error) {
        // Dacă apare o eroare, trimite un mesaj de eroare
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
