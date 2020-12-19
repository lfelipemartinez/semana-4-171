var jwt = require('jsonwebtoken');
const models = require('../models');


module.exports = {

    //generar el token
    encode: async(id, rol) => {

    },
    //permite decodificar el token
    decode: async(token) => {
        try {
            return jwt.decode(token);
        } catch (e) {
            return null;
        }
    }
}