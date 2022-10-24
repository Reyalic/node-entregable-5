const Messages = require("../models/messages.model")

const uuid = require("uuid")

const getAllMessages = async (conversationId) => {
    const data = await Messages.findAll({
        where: conversationId,
    })
    return data
}

const postMessage = async (data) => {
    const response = await Messages.create({
        id: uuid.v4(),
        userId: data.userId,
        conversationId: data.conversationId,
        message: data.message
    })
    return response
}

module.exports = {
    getAllMessages,
    postMessage
}