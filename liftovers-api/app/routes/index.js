module.exports = function (app) {
  var volunteer = require("../controllers/volunteer.js");
  var user = require("../controllers/user.js");
  var lift = require("../controllers/lifts.js");
  var donor = require("../controllers/donor.js");
  var provider = require("../controllers/provider.js");


  app.get("/donor", donor.findAll);
  app.get("/donor/:id", donor.getOne);
  app.post("/donor", donor.create);
  app.post("/donor/:id/delete", donor.deleteDonor);
  app.post("/donor/:id/update", donor.updateDonor);

  app.get("/lifts", lift.findAll);
  app.get("/lifts/requested", lift.findRequested);
  app.get("/lifts/posted", lift.findPosted);
  app.get("/lifts/ongoing", lift.findOngoing);
  app.get("/lifts/completed", lift.findCompleted);
  app.get("/lifts/cancelled", lift.findCancelled);
  app.get("/lifts/problem", lift.findProblem);
  app.get("/lift/:id", lift.findId);
  app.post("/lift/request", lift.requestLift);
  app.post("/lift/:id/post", lift.postLift);
  app.post("/lift/:id/complete", lift.completeLift);
  app.post("/lift/:id/cancel", lift.cancelLift);
  app.post("/lift/:id/problem", lift.problemLift);
  app.post("/lift/:id/update", lift.updateLift);

  app.get("/provider", provider.findAll);
  app.get("/provider/:id", provider.findId);
  app.post("/provider", provider.create);
  app.post("/provider/:id/delete", provider.deleteProvider);
  app.post("/provider/:id/update", provider.updateProvider);

  app.get("/user", user.findAll);
  app.get("/user/waiting", user.findWait);
  app.get("/user/:id", user.getOne);
  app.get("/reset/:token", user.reset);
  app.post("/user/:id", user.updateUser);
  app.post("/user/:id/approve", user.approveUser);
  app.post("/user/:id/delete", user.deleteUser);
  app.post("/user", user.create);
  app.post("/user/login", user.login);
  app.post("/forgot", user.forgot);
  app.post("/reset/:token", user.changepassword);

  app.get("/volunteer", volunteer.findAll);
  app.get("/volunteer/:id", volunteer.getOne);
  app.post("/volunteer", volunteer.create);
  app.post("/volunteer/:id", volunteer.updateVolunteer);
  app.post("/volunteer/:id/delete", volunteer.deleteVolunteer);
  app.post("/volunteer/:id/available", volunteer.availVolunteer);
  app.post("/volunteer/:id/unavailable", volunteer.unavailVolunteer);
  app.post("/volunteers/foodbank", volunteer.getDistanceBanks);
  app.post("/volunteers/availability", volunteer.acceptText);
};

