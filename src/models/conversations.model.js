const db = require("../utils/database")

const { DataTypes } = require("sequelize")

const Conversations = db.define("conversations", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "created_by"
    }
})

module.exports = Conversations