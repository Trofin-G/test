const express = require('express');
const connectDB = require('./db');

const app = express();

// Middleware pentru parsarea JSON
app.use(express.json());

// Conectează-te la MongoDB
connectDB();

// Definește rute
app.get('/', (req, res) => {
    res.send('API is running...');

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

// GET direct pentru toți utilizatorii
const User = require('./models/User');
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
