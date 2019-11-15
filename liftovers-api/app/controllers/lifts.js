var Lifts = require('../models/lifts.js');
var axios = require('axios')
const twilio = require('twilio')

var Volunteer = require('../models/volunteer.js');
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyD_LPYQsjwLnEh1fcK74vSsytYgvWHndZQ'
});

const accountSid = 'AC29bd8166067d95be88f6ce44ce53df5a'
const authToken = '329955eb209335d85af876937107502c'
const client = new twilio(accountSid, authToken)

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
    var postalCodes = []
    let volunteersTexted = []

    if (!req.body) {
        return res.status(400).send({ message: "Body can not be empty" });
    }

    let liftId = req.body._id
    let distancevolunteers = this.getVolunteers()
    
    distancevolunteers.then((vol) => {
        vol.forEach((volunteer) => {
            postalCodes.push(volunteer.postalCode)
        })

        let promises = postalCodes.map((postalcode) => {
            return this.mapsCall(req.body.origin, postalcode)
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
                let bool = false
                    item.volunteer.availability.forEach((volAvail) => {
                        if (req.body.availability.day.toLowerCase() === volAvail.day.toLowerCase()) {
                            bool = true
                        }
                    })
                return bool
            })
            .filter((item) => {
                let bool = false
                    item.volunteer.availability.forEach((volAvail) => {
                        if (volAvail.day.toLowerCase() === req.body.availability.day.toLowerCase()) {
                            if ((volAvail.timeStart.hour <= req.body.availability.time.hour)) {
                                bool = true
                            }
                        }
                    })
                return bool
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


exports.cancelLift = function(req, res) {
    if (!req.body) {
        return res.status(400).send({ message: "Body can not be empty" });
    }

    Lifts.findOneAndUpdate({ _id: req.body._id }, { status: "cancelled" })
        .then(ll => {
            console.log("changed lift status to cancelled");
        })
        .catch(error => {
            console.log(error);
        });
};