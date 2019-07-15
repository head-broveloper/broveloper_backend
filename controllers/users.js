'use strict';

const Model = require('../models/users');

function AddUser(request, h) {
    var response = Model.AddUser(request, h);
    return response;
};

function GetUser(request, h) {
    var response = Model.GetUser(request, h);
    return response;
};

function ListUsers(request, h) {
    var response = Model.ListUsers(request, h);
    return response;
};

function DeleteUser(request, h) {
    var response = Model.DeleteUser(request, h);
    return response;
};

function UpdateUser(request, h) {
    var response = Model.UpdateUser(request, h);
    return response;
};

function FindUser(request, h) {
    var response = Model.FindUser(request, h);
    return response;
};

module.exports = {
    AddUser,
    GetUser,
    ListUsers,
    DeleteUser,
    UpdateUser,
    FindUser
}