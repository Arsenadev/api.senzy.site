const CREATOR = "Sena1P"
const VERSION = "v1"

function response({
  source,
  status,
  result = null,
  message = null
}) {
  return {
    creator: CREATOR,
    sourceAPIS: source,
    version: VERSION,
    status,
    result,
    ...(message && { message })
  }
}

module.exports = response 
