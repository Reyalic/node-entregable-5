const router = require("express").Router()
const passport = require("passport")

const messageServices = require("./message.services")
require("../middlewares/auth.middleware")(passport)

router.route("/")
    .get(messageServices.getAllMessages)
    .post(
        passport.authenticate("jwt", {session: false}),
        messageServices.postMessage)

module.exports = router