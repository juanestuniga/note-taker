var util = require("util");
var fs = require("fs");
const uuid = require("uuid").v1;

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Save {
    read() {
        return readFile("db/db.json", "utf8")
    }
    write(note) {
        return writeFile("db/db.json", JSON.stringify(note))
    }

   
    addNote(note) {
        const { title, text } = note

        if (!title || !text) {
            throw new Error("Both title and text cannot be blank")
        }

        const newNote = { title, text, id: uuid() }

        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => this.newNote)
    }
    getNotes() {
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
            })
    }
    deleteNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(keptNotes => this.write(keptNotes))
    }
}

module.exports = new Save();