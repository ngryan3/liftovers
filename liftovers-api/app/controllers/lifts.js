var Lifts = require('../models/lifts.js');
var axios = require('axios')
const twilio = require('twilio')

var Volunteer = require('../models/volunteer.js');
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyD_LPYQsjwLnEh1fcK74vSsytYgvWHndZQ'
});

// liftover's twilio account id and token -- does not work for us
// const accountSid = "AC29bd8166067d95be88f6ce44ce53df5a";
// const authToken = "329955eb209335d85af876937107502c";

// this is our id and token -- the account however is connected to the deployed api link
// BUT it is only connected to the accept text function which shouldn't affect much
const accountSid = "AC1ae501eeef695a160370f76a11896ea1";
const authToken = "052155e3e011700d7d835fc18ee592f3";
const client = new twilio(accountSid, authToken)

mapsCall = (origin, dest) => {
    return axios({
      method: "get",
      url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${dest}&key=AIzaSyD_LPYQsjwLnEh1fcK74vSsytYgvWHndZQ`
    });
  };


sendText = (phone, pickupAddress) => {
    console.log('sendingg texttt', phone, pickupAddress)
    return client.messages.create({
        body: `Can you pick up the food item at ${pickupAddress}, reply with yes or no`,
        to: `+1${phone}`,  // Text this number
        from: '+16476952333' // From a valid Twilio number
    })
}


getVolunteers = (origin, dest) => {
    return Volunteer.find()
}


exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    let { page = 1, limit = 10 } = req.query;
    
    Lifts.paginate({}, { page, limit }).then(lifts => {
      if (!lifts)
        return res.status(404).send({ message: "No lifts found." });
      return res.status(200).send(lifts);
    });
};


exports.findRequested = function(req, res) {
    // Retrieve and return all notes whose status == "requested" from the database.
    Lifts.paginate({ status: "requested" }, { page: 1, limit: 10 }).then(lifts => {
        if (!lifts)
          return res.status(404).send({ message: "No requested lifts found." });
        return res.status(200).send(lifts);
    });
};


exports.findPosted = function(req, res) {
    // Retrieve and return all notes whose status == "posted" from the database.
    Lifts.paginate({ status: "posted" }, { page: 1, limit: 10 }).then(lifts => {
        if (!lifts)
          return res.status(404).send({ message: "No posted lifts found." });
        return res.status(200).send(lifts);
    });
};


exports.findOngoing = function(req, res) {
    // Retrieve and return all notes whose status == "ongoing" from the database.
    Lifts.paginate({ status: "ongoing" }, { page: 1, limit: 10 }).then(lifts => {
        if (!lifts)
          return res.status(404).send({ message: "No ongoing lifts found." });
        return res.status(200).send(lifts);
    });
};


exports.findCompleted = function(req, res) {
    // Retrieve and return all notes whose status == "completed" from the database.
    Lifts.paginate({ status: "completed" }, { page: 1, limit: 10 }).then(lifts => {
        if (!lifts)
          return res.status(404).send({ message: "No completed lifts found." });
        return res.status(200).send(lifts);
    });
};


exports.findCancelled = function(req, res) {
    // Retrieve and return all notes whose status == "cancelled" from the database.
    Lifts.paginate({ status: "cancelled" }, { page: 1, limit: 10 }).then(lifts => {
        if (!lifts)
          return res.status(404).send({ message: "No cancelled lifts found." });
        return res.status(200).send(lifts);
    });
};


exports.findProblem = function(req, res) {
    // Retrieve and return all notes whose status == "problem" from the database.
    Lifts.paginate({ status: "problem" }, { page: 1, limit: 10 }).then(lifts => {
        if (!lifts)
          return res.status(404).send({ message: "No problem lifts found." });
        return res.status(200).send(lifts);
    });
};


exports.findId = function(req, res) {
    // Return lift whose id == id given in url.
    Lifts.find({ _id: req.params.id }).then(lifts => {
        if (!lifts)
          return res.status(404).send({ message: "No lifts with given id found." });
        return res.status(200).send(lifts);
    });
};


exports.requestLift = function(req, res) {
    if (!req.body) {
        return res.status(400).send({ message: "Body can not be empty" });
    }

    let body = req.body

    var lift = new Lifts({ 
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        postalCode: body.postalCode,
        date: body.date,
        // email or phone
        commmunicationMethod: body.commmunicationMethod,
        // time when food is served
        serveTime: body.serveTime,
        // time when food should be picked up
        pickupTime: body.pickupTime,   
        // pickup address
        address: body.address,
        // description of food
        description: body.description,
        // Additional details (e.g. Buzzer code, specific directions, etc.)
        details: body.details,
        disclaimerChecked: body.disclaimerChecked
    });

    lift.save(function (err, data) {
        if (err) {
            console.log(err);
            res
              .status(500)
              .send({ message: "Some error occurred while creating the Volunteer." });
        } else {
            res.send(data);
        }
    });
}


exports.postLift = function(req, res) {
    if (!req.body) {
        return res.status(400).send({ message: "Body can not be empty" });
    }

    var postalCodes = []
    let volunteersTexted = []
    let liftId = req.body._id
    let distancevolunteers = this.getVolunteers()
    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    
    distancevolunteers.then((vol) => {
        vol.forEach((volunteer) => {
            postalCodes.push(volunteer.postalCode)
        })

        let promises = postalCodes.map((postalcode) => {
            return this.mapsCall(req.body.postalCode, postalcode)
        })

        Promise.all(promises).then((values) => {
            let valData = values.map((item, index) => {
                return {
                    data: item.data.rows[0].elements[0],
                    volunteer: vol[index]
                }
            })
            .sort(function (a, b) {
                let itemA = a.data.duration.value // ignore upper and lowercase
                let itemB = b.data.duration.value // ignore upper and lowercase
                if (itemA < itemB) {
                    return -1;
                }
                if (itemA > itemB) {
                    return 1;
                }
                return 0;
            })

            let timeSorted = valData.filter((item) => {
                let weekday = weekdays[req.body.date.getDay()];
                let pickupTime = parseInt(req.body.pickupTime.hour.toString() + 
                                    req.body.pickupTime.minute.toString());

                item.volunteer.availability.forEach((volAvail) => {
                    if (volAvail.day.toLowerCase() === weekday) {
                        let volTimeStart = parseInt(volAvail.timeStart.hour.toString() + 
                                            volAvail.timeStart.minute.toString());
                        let volTimeFinish = parseInt(volAvail.volTimeFinish.hour.toString() +
                                                volAvail.volTimeFinish.minute.toString());

                        if (volTimeStart <= pickupTime && volTimeFinish >= pickupTime) {
                            return true;
                        }
                    }
                })
                return false;
            })

            console.log('timesorted', timeSorted)

            let textPromises = timeSorted.map((item) => {
                return this.sendText(item.volunteer.phone, req.body.origin)
            })

            Promise.all(textPromises).then((promiseitem) => {}).catch((error) => {
                console.log(error)
            })

            volunteersTexted = timeSorted.map((item) => {
                return item.volunteer
            })

            Lifts.findOneAndUpdate({ _id: liftId }, { status: "posted",  volunteer: volunteersTexted})
                .then(ll => {
                    console.log("changed lift status to posted");
                })
                .catch(error => {
                    console.log(error);
                });

            return res.status(200).send(timeSorted)
        })
        .catch((error) => {
            console.log(error)
        });
    })
};


exports.completeLift = function(req, res) {
    Lifts.findOneAndUpdate({ _id: req.params.id }, { status: "completed" })
        .then(ll => {
            console.log("changed lift status to completed");
        })
        .catch(error => {
            console.log(error);
        });
};


exports.cancelLift = function(req, res) {
    Lifts.findOneAndUpdate({ _id: req.params.id }, { status: "cancelled" })
        .then(ll => {
            console.log("changed lift status to cancelled");
        })
        .catch(error => {
            console.log(error);
        });
};


exports.problemLift = function(req, res) {
    Lifts.findOneAndUpdate({ _id: req.params.id }, { status: "problem" })
        .then(ll => {
            console.log("changed lift status to problem");
        })
        .catch(error => {
            console.log(error);
        });
};