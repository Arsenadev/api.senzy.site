const axios = require("axios")
const response = require("../../utils/response")

async function savefrom(req, res) {
  try {
    const { url } = req.query

    if (!url) {
      return res.status(400).json(
        response({
          source: "SiputXZ API",
          status: false,
          message: "Parameter 'url' is required"
        })
      )
    }

    const apiUrl =
      "https://api.siputzx.my.id/api/d/savefrom?url=" +
      encodeURIComponent(url)

    const apiResponse = await axios.get(apiUrl, {
      timeout: 15000,
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    })

    return res.json(
      response({
        source: "SiputXZ API",
        status: apiResponse.data.status === true,
        result: apiResponse.data.data
      })
    )

  } catch (error) {
    console.error("SaveFrom Error:", error.message)

    return res.status(500).json(
      response({
        source: "SiputXZ API",
        status: false,
        message: "Failed to fetch SaveFrom API"
      })
    )
  }
}

module.exports = savefrom
