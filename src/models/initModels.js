const Users = require("./users.models")
const Conversations = require("./conversations.model")
const Participants = require("./participants.model")
const Message = require("./message.model")


const initModels = () => {
    Users.hasMany(Conversations)

    Conversations.belongsTo(Users)
}

module.exports = initModels