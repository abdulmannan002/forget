const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('../FORGOT/routes/auth.cjs');

dotenv.config(); // Load environment variables

const app = express();
app.use(bodyParser.json()); // Parse incoming requests

// Register routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
