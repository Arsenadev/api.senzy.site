const express = require("express")

const savefrom = require("../endpoints/downloader/savefrom")

const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    name: "Senzy API",
    version: "v1",
    status: true,
    message: "Senzy API is running"
  })
})

router.get("/downloader/savefrom", savefrom)

module.exports = router
