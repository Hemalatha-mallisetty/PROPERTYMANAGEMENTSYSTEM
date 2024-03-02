const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB database
mongoose.connect('mongodb://0.0.0.0:27017/owners', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);
});

// Define Mongoose schema and model for owner data
const ownerSchema = new mongoose.Schema({
  ownerID: { type: String, required: true },
  createdBy: { type: String, required: true },
  createdDateTime: { type: Date, default: Date.now },
  status: { type: String, required: true },
  daysToClose: { type: Number, required: true }
});

// Define a virtual for actions
ownerSchema.virtual('actions').get(function () {
  return ['view', 'update']; // Define available actions
});

const OwnerModel = mongoose.model('Owner', ownerSchema, 'owners'); // Define the model here

// Define route to search for owner details by owner ID or owner name
app.get('/api/owners', async (req, res) => {
  try {
    const query = req.query.query && typeof req.query.query === 'string' ? req.query.query.trim() : '';
    // Search for owner details based on owner ID or owner name
    const owners = await OwnerModel.find({
      $or: [
        { ownerID: { $regex: query, $options: 'i' } }, // Case-insensitive regex search for owner ID
        { createdBy: { $regex: query, $options: 'i' } } // Case-insensitive regex search for created by
      ]
    }, { ownerID: 1, createdBy: 1, createdDateTime: 1, status:1, daysToClose: 1 }); // Include daysToClose in the result
    res.json(owners); // Respond with the found owner details
  } catch (error) {
    console.error('Error searching owners:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define more routes for CRUD operations, if needed

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

