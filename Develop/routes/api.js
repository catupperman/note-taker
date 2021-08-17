const router = require('express').Router()
const noteHandler = require('../db/notehandler.js')

router.get('/', function (req, res){
   noteHandler.readnotes().then(note => res.json(note)).catch(err => res.json(err))
   // res.json({message : 'okay'})
});

router.post('/', function (req, res){
    noteHandler.createNotes(req.body).then(notesArr => res.json(notesArr)).catch(err => res.json(err))
})



module.exports = router