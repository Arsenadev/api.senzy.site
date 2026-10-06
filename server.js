const express = require("express")
const cors = require("cors")

const apiRoutes = require("./routes/api")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1", apiRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Senzy API running on port ${PORT}`)
})
