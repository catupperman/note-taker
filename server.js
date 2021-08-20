const express = require('express');
const htmlRoutes = require('./routes/html.js')
const api = require('./routes/api.js')
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', htmlRoutes)

app.use('/api', api)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

//app.delete

