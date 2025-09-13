const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Story generation endpoint
app.post('/generate-story', (req, res) => {
    const { name, characters, setting, moral } = req.body;

    const story = `
Once upon a time in ${setting}, there were brave characters named ${characters}.
They went on an adventure full of surprises and fun!

With courage and teamwork, they overcame every challenge they faced.
In the end, they learned a valuable lesson: "${moral}".

And so, ${name} and their friends lived happily ever after!
    `;

    res.json({ story: story.trim() });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
