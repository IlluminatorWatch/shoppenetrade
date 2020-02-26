// Härifrån startar vi upp vår webshop
const mongoose = require('mongoose')
const dbUrl = process.env.MONGO_ATLAS_URL
const { app, port } = require('./src/server')

// const dbConfig = require('./config/config')
// // if(dbConfig.databaseURL == undefined) {
// //     dbConfig.databaseURL == "<API för miljövaribabel netlify>"
// // }

// if (process.env.NODE_ENV == "production") {
//     // Environment om/när vi är i produktion
//     dbConfig.databaseURL = process.env.MONGO_ATLAS_URL // Värdet hämtas från miljövariabel i heroku
// } else {
//     const dbConfig = require("./config/config")
// }

// Kicka igång servern
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true }
mongoose.connect(dbUrl, dbOptions).then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}!`))
})

module.exports = { app, port }