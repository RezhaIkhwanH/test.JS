const express = require('express');
const router = express.Router()


router.get('/con', (req, res,) => {
    res.send('anda di  :' + req.url)

});

router.get('/file', (req, res,) => {
    res.send('anda di  :' + req.url)
})

router.use((req, res) => {
    res.send('tidak di temukan :' + req.url)
})

module.exports = router;
