const db = require("../utils/database")

const { DataTypes } = require("sequelize")

const Messages = db.define("message", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    senderId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "sender_id"
    },
    conversationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "conversation_id"
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})

module.exports = Messages