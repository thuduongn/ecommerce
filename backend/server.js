const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { dbConnect } = require('./utilities/db');
const bodyParser = require('body-parser');

// Use CORS with specific origins and credentials
app.use(cors({
  origin: ['https://ecommerce-1ovefwvme-thu-duong-nguyens-projects.vercel.app', 'http://localhost:3000'],
  credentials: true,
}));

app.use(bodyParser.json())
   .use(bodyParser.urlencoded());


app.use(cookieParser());

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Specific route for manifest.json to ensure it's not protected
// app.get('/manifest.json', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'manifest.json'));
// });

app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/dashboard/categoryRoutes'));
app.use('/api', require('./routes/dashboard/productRoutes'));

app.get('/', (req, res) => res.send('My backend'));

const port = process.env.PORT || 5000;

dbConnect();

app.listen(port, () => console.log(`Server is running on port ${port}`));
