const { Sequelize } = require("sequelize")
const env = require("../env")

const sequelize = new Sequelize('toughts', 'node', env.PASSWORD, {
    host: 'localhost',
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log("connected on mysql!")
} catch (err) {
    console.error(`A exception here: ${err}`)

}

module.exports = sequelize