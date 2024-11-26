require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const aiRoutes = require('./routes/aiRoutes');
const app = express();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.DATABASE_URL });
client.connect()
  .then(() => console.log('Connected to database!'))
  .catch(err => console.error('Connection error', err.stack));

  
app.use(bodyParser.json());
app.use('/api', aiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

