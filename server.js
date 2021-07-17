const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_Env === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
     });
}


app.listen(port, () => {
    console.log(`Serve is up on port ${port}`);
})
