const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('client'));
app.use(express.json());

app.listen(PORT, () => console.log(`Server running at https://localhost:${PORT}`));