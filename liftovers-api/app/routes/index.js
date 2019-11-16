module.exports = function(app) {
  var volunteer = require("../controllers/volunteer.js");
  var user = require("../controllers/user.js");
  var lift = require("../controllers/lifts.js");

  // Create a new Note
  app.post("/volunteer", volunteer.create);
  app.post("/volunteer/availability", volunteer.acceptText);
  app.post("/user", user.create);
  app.post("/volunteers/donors", volunteer.getDistance);
  app.post("/volunteers/foodbank", volunteer.getDistanceBanks);
  app.post("/lift/request", lift.requestLift);
  app.post("/lift/post", lift.postLift);
  app.post("/lift/complete", lift.completeLift);
  app.post("/lift/cancel", lift.cancelLift);
  app.post("/lift/problem", lift.problemLift);

  app.get("/lifts", lift.findAll);
  app.get("/lifts/requested", lift.findRequested);
  app.get("/volunteer", volunteer.findAll);
  app.get("/user", user.findAll);
};

