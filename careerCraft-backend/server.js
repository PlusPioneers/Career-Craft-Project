require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', aiRoutes);

const PORT = process.env.PORT || 5000; // Use the PORT variable or default to 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));