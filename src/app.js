const express = require('express');
const helloRoute = require('./routes/helloRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle '/hello' endpoint
app.use('/hello', helloRoute);

// Root route
app.get('/', (req, res) => {
    res.send('Hello World'); // Send a response to the client
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
