const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const appPath = path.join(__dirname, 'client', 'build')


app.use(express.static(appPath))
app.get('*', (req, res) => {
    res.sendFile(path.join(appPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Serve is up on port ${port}`);
})
