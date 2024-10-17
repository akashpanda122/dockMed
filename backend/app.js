const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const recordRoutes = require('./routes/recordRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the wayToDoc Backend API');
});

// Use routes
app.use('/api', userRoutes);
app.use('/api', consultationRoutes);
app.use('/api', recordRoutes);
app.use('/api', prescriptionRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
