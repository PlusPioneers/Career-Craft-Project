require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', aiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
