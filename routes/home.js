const {Router} = require('express');//El router lo necesitas si creas modulos como este archivo
const router = Router();

//En este punto ya somos capaces de realizar modificaciones sobre la tabla Player utilizando metodos como Player.create(), Player.findAll, Player.findOne, etc
//Si quisieramos utilizar operadores tables como WHERE AND OR necesitaremos importar Op
const {Player, Op} = require('../db');

router.get('/', (req, res) => {
    res.status(200).send('All ok!');
});

module.exports = router;
