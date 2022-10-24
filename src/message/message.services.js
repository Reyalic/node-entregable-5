const messagesControllers = require("./message.controller")

const getAllMessages = (req, res) => {
    const conversationId = req.params.id
    const userId = req.user.id
    messagesControllers.getAllMessages({userId, conversationId})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postMessage = (req, res) => {
    const userId = req.user.id
    const  {message, conversationId} = req.body

    if(message && conversationId) {
        messagesControllers.postMessage({userId, conversationId, message})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: "Missing Data",
        })
    }
}

module.exports = {
    getAllMessages,
    postMessage
}
