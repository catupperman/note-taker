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
         writeFile("db/db.json", JSON.stringify(note), () => console.log("note complete"))

    }
    //adds new notes to json
    async createNotes(note) {
        const { title, text } = note;
        const noteObj = { title, text, id: uuidv4() };
        const notes = await this.readnotes();
        const newNotesArr = [...notes, noteObj];
        await this.write(newNotesArr);
        return "a";
    }
}


//exports the notes to the html through the api.js file
module.exports = new NoteHandler()