const express = require('express');
const app = express();
const jobRoutes = require('./routes/jobRoutes');
const connectDB = require('./db/connection');

connectDB();
app.use(express.json());
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
