"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lab4db_1 = require("../lab4db");
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.send({ msg: "users" });
});
router.post('/', (req, res, next) => {
    const newUser = new lab4db_1.User(Object.assign({}, req.body));
    newUser.save()
        .then((user) => {
        if (user) {
            console.log('All good, created');
            res.send({ ok: "ok" });
        }
        else {
            console.log('Not good, not created');
            res.send({ error: "error" });
        }
    })
        .catch((e) => {
        console.log('somethin is wrong', e);
        res.send({ error: "something is wrong" });
    });
});
exports.default = router;
//# sourceMappingURL=users.js.map