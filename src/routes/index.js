const router = require("express").Router()
const routerProducts = require("./routerProduct")
const routerUser = require("./routerUser")

router.use("/user", routerUser)
router.use("/product", routerProducts)

module.exports = router