let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

router.delete('/delete', (req, res) => {
    Controllers.userController.deleteUser(req.body, res)
})

module.exports = router;