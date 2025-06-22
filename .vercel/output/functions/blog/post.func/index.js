const {handler} = require('../../../pin.js')(req, res)

module.exports = (req, res) => {
  handler(req, res)
}
