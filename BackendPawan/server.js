const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB database
mongoose.connect('mongodb://0.0.0.0:27017/pawan', {
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
  OwnerId: { type: String, required: true },
  OwnerName: { type: String, required: true },
  PropertyId: { type: Number, required: true },
  MobileNumber: { type: Number, required: true },
  Create: { type: String, required: true }
});

const OwnerModel = mongoose.model('Owner', ownerSchema, 'owners');

// Define route to search for owner details by owner ID or owner name
app.get('/api/owners', async (req, res) => {
  try {
    const query = req.query.query && typeof req.query.query === 'string' ? req.query.query.trim() : '';
    const owners = await OwnerModel.find({
      $or: [
        { OwnerId: { $regex: query, $options: 'i' } },
        { OwnerName: { $regex: query, $options: 'i' } }
      ]
    }, { OwnerId: 1, OwnerName: 1, PropertyId: 1, MobileNumber: 1, Create: 1 });
    res.json(owners);
  } catch (error) {
    console.error('Error searching owners:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
