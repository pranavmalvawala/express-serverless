const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Hey there to myself" })
})

app.get("/hello-world", (req, res) => {
    res.status(200).json({ message: "Hello World!" })
})

module.exports = app