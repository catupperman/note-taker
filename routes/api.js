const router = require('express').Router()
const noteHandler = require('../db/notehandler');
//get the note information from db.json file
router.get('/notes', function (req, res){
   noteHandler.readnotes().then(note => res.json(note)).catch(err => res.json(err))
   // res.json({message : 'okay'})
});
//post the note from new notes saved into the db.json
router.post('/notes',(req, res) => {
    console.log(req.body, "req body")
    noteHandler.createNotes(req.body).then(notesArr => res.json(notesArr)).catch(err => res.json(err))
})



module.exports = router