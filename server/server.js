const express = require('express');
const app = express();
const api = require('./routes/index.js');

app.use('/api', api);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));