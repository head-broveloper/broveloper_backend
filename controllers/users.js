'use strict';

const Model = require('../models/users');

function AddUser(payload, h) {
    var response = Model.AddUser(payload, h);
    return response;
};

module.exports = {
    AddUser
}