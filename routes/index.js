const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Välkomen till detta konstiga sida jag har gjort',
        title: 'Home',
    });
  });

router.get('/levande', async function (req, res, next) {
    res.render('levande.njk', {
        message: "",
        title: 'Den levande',
    });
});

router.get('/helig', async function (req, res, next) {
    res.render('helig.njk', {
        message: 'Ingen kan se den heliga saken',
        title: 'Det heliga templet',
    });
});

module.exports = router