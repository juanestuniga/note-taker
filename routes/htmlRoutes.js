var path = require('path');
const router = require('express').Router();

//notes.html function
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//index.html function
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;