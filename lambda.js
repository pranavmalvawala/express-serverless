const { createServer, proxy } = require("aws-serverless-express")
const app = require("./app")
const server = createServer(app)

module.exports.universal = function(event, context) {
    return proxy(server, event, context)
}