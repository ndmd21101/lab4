"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
exports.User = mongoose.model('User', userSchema);
mongoose.connect('mongodb+srv://ndmd2110:tmkeGd7ZeDCRWENc@lab4.ivnkepg.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
    console.log('Connected to mongo');
})
    .catch(() => {
    console.log('Failed to connect to mongo');
});
//# sourceMappingURL=lab4db.js.map