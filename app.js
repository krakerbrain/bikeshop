const express  = require('express');
const path     = require('path');
const app      = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log('server started')
});

app.use(require("./routes/index"));
module.exports = app;