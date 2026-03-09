const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
const router = require("./routes/index")

app.use(cors())
app.use(morgan("dev"))
app.use(express.json({limit: "10mb"}))

app.use("/", router)

module.exports = app