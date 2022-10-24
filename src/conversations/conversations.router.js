const router = require("express").Router()
const passport = require("passport")

const conversationServices = require("./conversations.services")
require("../middlewares/auth.middleware")(passport)

router.route("/")
    .get(conversationServices.getAllConversations)
    .post(
        passport.authenticate("jwt", {session: false}),
        conversationServices.postConversation)

router.get("/:id", conversationServices.getConversationById)

module.exports = router