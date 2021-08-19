const router = require('express').Router()
const path = require('path');
//links to the index html file
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);
//links to the notes html file
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);



module.exports = router