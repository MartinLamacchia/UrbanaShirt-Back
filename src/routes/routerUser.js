const routerUser = require("express").Router()
const loginUser = require("../controllers/user/loginUser")
const registerUser = require("../controllers/user/registerUser")

routerUser.post("/registerUser", registerUser)
routerUser.post("/loginUser", loginUser)

module.exports = routerUser