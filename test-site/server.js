const express = require('express');
const path = require('path');
const app = express();
const port = 9000;
const distPath = path.resolve(__dirname, '..', 'dist');

app.use('/', express.static(distPath));
app.use('/', express.static(__dirname));

app.listen(port, () => console.log(`Listening on port [${port}].`))