const express = require('express')
const app = express();
const path = require('path')
const route = require('./routes');
const PORT = 3030;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'views')));
route(app);
app.listen(PORT, () => {
    console.log('Example app listening at http://localhost:' + PORT)
})