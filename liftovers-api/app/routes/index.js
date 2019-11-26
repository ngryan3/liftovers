module.exports = function(app) {
  var volunteer = require("../controllers/volunteer.js");
  var user = require("../controllers/user.js");
  var lift = require("../controllers/lifts.js");
  var donor = require("../controllers/donor.js");
  var provider = require("../controllers/provider.js");

  // Create a new Note
  app.get("/user", user.findAll);
  app.post("/user", user.create);

  app.get("/volunteer", volunteer.findAll);
  app.post("/volunteer", volunteer.create);
  app.post("/volunteer/availability", volunteer.acceptText);
  app.post("/volunteers/donors", volunteer.getDistance);
  app.post("/volunteers/foodbank", volunteer.getDistanceBanks);

  app.get("/lifts", lift.findAll);
  app.get("/lifts/requested", lift.findRequested);
  app.post("/lift/request", lift.requestLift);
  app.post("/lift/post", lift.postLift);
  app.post("/lift/complete", lift.completeLift);
  app.post("/lift/cancel", lift.cancelLift);
  app.post("/lift/problem", lift.problemLift);

  app.get("/donor", donor.findAll);
  app.post("/donor", donor.create);

  app.get("/provider", provider.findAll);
  app.post("/provider", provider.create);
};

