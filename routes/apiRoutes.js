const router = require('express').Router();
const save = require('../Develop/db/save');

// GET 
router.get('/api/notes', (req, res) => {
    save
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST 
router.post('/api/notes', (req, res) => {
    save
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

//DELETE 
router.delete('/api/notes/:id', function (req, res) {
    save
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


module.exports = router;