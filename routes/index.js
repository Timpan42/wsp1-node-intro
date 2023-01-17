const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Välkomen',
        title: 'Home',
    });
  });

router.get('/levande', async function (req, res, next) {
    res.render('levande.njk', {
        message: '',
        title: 'Det levande',
    });
});

router.get('/helig', async function (req, res, next) {
    res.render('helig.njk', {
        message: '',
        title: 'Det heliga templet',
    });
});

module.exports = router