"use strict";

const Hapi = require("hapi");
require('dotenv').config()

const server = Hapi.server({
  port: process.env.PORT || 4000,
  host: process.env.HOST || "0.0.0.0", // needed for Render deployment
  routes: {
    cors: {
        origin: [process.env.CORS_ORIGIN_WHITELIST], // an array of origins or 'ignore'
    }
  }
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {

    return "Hello, world!";
  }
});

server.route({
  method: "GET",
  path: "/{name}",
  handler: (request, h) => {

    request.logger.info("In handler %s", request.path);

    return `Hello, ${encodeURIComponent(request.params.name)}!`;
  }
});

const init = async () => {

  await server.register([
    {
      plugin: require("inert"),
      options: {}
    },
    {
      plugin: require("hapi-pino"),
      options: {
        prettyPrint: true,
        logEvents: ["response", "onPostStart"]
      }
    }]);

  server.route({
    method: "GET",
    path: "/hello",
    handler: (request, h) => {

      return h.file("./public/hello.html");
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {

  console.log(err);
  process.exit(1);
});

init();
