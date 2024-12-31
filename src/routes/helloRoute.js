const express = require('express');
const { getHello } = require('../controllers/helloController');

const router = express.Router();

const setHelloRoute = () => {
    router.get('/hello', getHello);
    return router;
};

module.exports = setHelloRoute;