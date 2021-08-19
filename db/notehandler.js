const fs = require('fs')
const util = require('util')
const { v4: uuidv4 } = require('uuid')
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)

class NoteHandler {
    //reads the note already in the db.json
    read() {
        return readFile('db/db.json', 'utf8')
    }
    //reads and parses all the notes within the db.json file
    readnotes() {
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
    //writes the notes into the db.json file
    write(note) {
        return writeFile("db/db.json", JSON.stringify(note))
    }
    //attempting to take the written notes and the notes already within the db.json and save to the db.json, so they appear on the screen when saved (this is a failed function, that I have been spending 30 plus hours trying to fix)  Insomnia indicates note is undefined when taking away the synatx for an async function.  I attempted to get help from my tutor on this, but they could not figure out why note was readable within the write portion of this constructor function, but does not exist within the createnotes portion of this constructor function. 
    async createNotes(note) {
        const { title, text } = note;
        const noteObj = { title, text, id: uuidv4() };
        const notes = await this.readnotes();
        console.log(notes);
        const newNotesArr = [...notes, noteObj];
        console.log(newNotesArr);
        await this.write(newNotesArr);
        return "a";
    }
}


//exports the notes to the html through the api.js file
module.exports = new NoteHandler()