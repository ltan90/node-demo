const path = require('path');
const express = require('express');
const app = express();
var port = process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.send('Hello World!!'));
app.listen(port, () => console.log('Server in running on port ' + port));