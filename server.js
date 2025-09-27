const express = require('express');
const app = express();
app.use(express.static('public')); // or your folder name
app.listen(8080, () => console.log('Server running on port 8080'));