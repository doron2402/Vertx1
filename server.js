var Router = require("vertx-web-js/router");
var server = vertx.createHttpServer();
var router = Router.router(vertx);

router.get("/").handler(function (ctx) {
  // This handler will be called for "/" requests
  var response = ctx.response();
  response.putHeader("content-type", "application/json");
  response.end('{"code":"ok"}');
});
router.get("/users").handler(function(ctx){
  var response = ctx.response();
  response.putHeader("content-type", "application/json");
  response.end('{"code":"ok", "users": [{"id": 1},{"id":2}]}');
});

router.get("/users/:id").handler(function(ctx){
  var id = ctx.request().getParam("id");
  var response = ctx.response();
  response.putHeader("content-type", "application/json");
  response.end('{"code":"ok", "users": {"id": '+id+'}}');
});

server.requestHandler(router.accept).listen(8080);
