module.exports = function (app) {
    var volunteer = require("../controllers/volunteer.js");
    var user = require("../controllers/user.js");
    var lift = require("../controllers/lifts.js");
    var donor = require("../controllers/donor.js");
    var provider = require("../controllers/provider.js");


    app.get("/donor", donor.findAll);
    app.post("/donor", donor.create);

    app.get("/lifts", lift.findAll);
    app.get("/lifts/requested", lift.findRequested);
    app.get("/lifts/posted", lift.findPosted);
    app.get("/lifts/ongoing", lift.findOngoing);
    app.get("/lifts/completed", lift.findCompleted);
    app.get("/lifts/cancelled", lift.findCancelled);
    app.get("/lifts/problem", lift.findProblem);
    app.post("/lift/request", lift.requestLift);
    app.post("/lift/post", lift.postLift);
    app.post("/lift/:id/complete", lift.completeLift);
    app.post("/lift/:id/cancel", lift.cancelLift);
    app.post("/lift/:id/problem", lift.problemLift);

    app.get("/provider", provider.findAll);
    app.post("/provider", provider.create);

    app.get("/user", user.findAll);
    // app.get("/user/:id", user.getOne);
    app.get("/reset/:token", user.reset);
    // not 100% sure this one works yet
    // app.post("/user/:id", user.updateUser);
    // app.post("/user/:id/delete", user.deleteUser);
    app.post("/user", user.create);
    app.post("/user/login", user.login);
    app.post("/forgot", user.forgot);
    app.post("/reset/:token", user.changepassword);

    app.get("/volunteer", volunteer.findAll);
    app.post("/volunteer", volunteer.create);
    app.post("/volunteer/availability", volunteer.acceptText);
    //app.post("/volunteers/donors", volunteer.getDistance);
    app.post("/volunteers/foodbank", volunteer.getDistanceBanks);
};

