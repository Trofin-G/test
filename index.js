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
app.use('/api', userRoutes);
