const router = require('express').Router();
const fs = require('fs');
router.use((req, res) => {
    const data = fs.readFileSync('./data/resume.json',
        { encoding: 'utf8', flag: 'r' });
    console.log(data);
    res.render('resume', { 'data': JSON.parse(data), layout: 'main.handlebars' });
});
module.exports = router;
