'use strict';
const AddUser = function(request, h) {
    console.log(request.payload);
    return "test";
}

const GetUser = function(request, h) {
    console.log(request.query);
    return "test";
}

const ListUsers = function(request, h) {
    console.log(request.query);
    return "test";
}

const DeleteUser = function(request, h) {
    console.log(request.payload);
    return "test";
}

const UpdateUser = function(request, h) {
    console.log(request.payload);
    return "test";
}

const FindUser = function(request, h) {
    console.log(request.payload);
    return "test";
}

module.exports = {
    AddUser,
    GetUser,
    ListUsers,
    DeleteUser,
    UpdateUser,
    FindUser
}