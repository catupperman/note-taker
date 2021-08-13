const fs = require('fs')
const util = require('util')
const { v4: uuidv4 } = require('uuid');
//uuidv4();
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)

class NoteHandler{
    read(){
        return readFile('db/db.json', 'utf8')
    }
    readnotes(){
        return this.read().then(notes => {
            let notesArr;
            try {
                notesArr = [].concat(JSON.parse(notes))
                
            } catch (error) {
                notesArr = []
            }

            return notesArr;
        })
    }

    write(note){
        return writeFile("db/db.json", JSON.stringify(note))
    }

    createNotes(note){
        let noteObj = {title: note.title, text: note.text, id: uuidv4()}
        return this.readnotes().then(notesArr => {
            console.group(noteObj, notesArr)
        })
    }
    
}



module.exports = new NoteHandler()