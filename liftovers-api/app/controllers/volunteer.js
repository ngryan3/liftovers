var axios = require("axios");
var Lifts = require("../models/lifts.js");
const twilio = require("twilio");

var Volunteer = require("../models/volunteer.js");
// var googleMapsClient = require("@google/maps").createClient({
//   key: "AIzaSyD_LPYQsjwLnEh1fcK74vSsytYgvWHndZQ"
// });

// liftover's twilio account id and token -- does not work for us
// const accountSid = "AC29bd8166067d95be88f6ce44ce53df5a";
// const authToken = "329955eb209335d85af876937107502c";

// this is our id and token -- the account however is connected to the deployed api link
// BUT it is only connected to the accept text function which shouldn't affect much
const accountSid = "AC1ae501eeef695a160370f76a11896ea1";
const authToken = "052155e3e011700d7d835fc18ee592f3";
const client = new twilio(accountSid, authToken);

getVolunteers = (origin, dest) => {
    return Volunteer.find();
};


// Create and Save a new Note
exports.create = function (req, res) {
    // Create and Save a new Note
    if (!req.body.name) {
        return res.status(400).send({ message: "Name can not be empty" });
    }

    var volunteer = new Volunteer({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        methodOfCommunication: req.body.methodOfCommunication,
        postalCode: req.body.postalCode,
        secondaryPostalCode: req.body.secondaryPostalCode,
        availability: req.body.availability,
        licensed: req.body.licensed,
        hasVehicle: req.body.licensed,
        additionalNotes: req.body.additionalNotes,
        lifts: req.body.lifts,
        waiverSigned: req.body.waiverSigned,
        status: req.body.status
    });

    volunteer.save(function (err, data) {
        if (err) {
            console.log(err);
            res
                .status(500)
                .send({ message: "Some error occurred while creating the Volunteer." });
        } else {
            res.send(data);
        }
    });
};


exports.getDistanceBanks = function (req, res) {
    var postalCodes = [];

    if (!req.body) {
        return res.status(400).send({ message: "Body can not be empty" });
    }

    let distancevolunteers = this.getVolunteers();

    distancevolunteers.then(vol => {
        vol.forEach(volunteer => {
            postalCodes.push(volunteer.postalCode);
        });

        let promises = postalCodes.map(postalcode => {
            return this.mapsCall(req.body.origin, postalcode);
        });

        Promise.all(promises)
            .then(values => {
                let valData = values
                    .map((item, index) => {
                        return {
                            data: item.data.rows[0].elements[0],
                            volunteer: vol[index]
                        };
                    })
                    .sort(function (a, b) {
                        let itemA = a.data.duration.value; // ignore upper and lowercase
                        let itemB = b.data.duration.value; // ignore upper and lowercase

                        if (itemA < itemB) {
                            return -1;
                        }
                        if (itemA > itemB) {
                            return 1;
                        }
                        return 0;
                    });

                return res.status(200).send(valData);
            })
            .catch(error => {
                console.log(error);
            });
    });
};


exports.findAll = function (req, res) {
    // Retrieve and return all volunteers (not deleted) from the database.
    let { page = 1, limit = 100 } = req.query;

    Volunteer.paginate({ status: { '$ne': "deleted" } }, { page, limit }).then(volunteers => {
        if (!volunteers)
            return res.status(404).send({ message: "No Volunteers found." });
        return res.status(200).send(volunteers);
    });
};

exports.getOne = function (req, res) {
    Volunteer.findById(req.params.id, function (err, volunteer) {
        if (err) {
            return res.status(404).send({ message: "No such volunteer." });
        } else {
            return res.status(200).send(volunteer);
        }
    });
};

exports.deleteVolunteer = function (req, res) {
    Volunteer.findByIdAndUpdate(req.params.id, { status: "deleted" })
        .then(ll => {
            console.log("changed volunteer status to deleted");
        })
        .catch(error => {
            console.log(error);
        });
};

exports.unavailVolunteer = function (req, res) {
    Volunteer.findByIdAndUpdate(req.params.id, { status: "unavailable" })
        .then(ll => {
            console.log("changed volunteer status to unavailable");
        })
        .catch(error => {
            console.log(error);
        });
};

exports.availVolunteer = function (req, res) {
    Volunteer.findByIdAndUpdate(req.params.id, { status: "available" })
        .then(ll => {
            console.log("changed volunteer status to available");
        })
        .catch(error => {
            console.log(error);
        });
};

exports.updateVolunteer = function (req, res) {
    let update = {}
    if (req.body.name) {
        update.name = req.body.name;
    }
    if (req.body.surname) {
        update.surname = req.body.surname;
    }
    if (req.body.email) {
        update.email = req.body.email;
    }
    if (req.body.phone) {
        update.phone = req.body.phone;
    }
    if (req.body.methodOfCommunication) {
        update.methodOfCommunication = req.body.methodOfCommunication;
    }
    if (req.body.postalCode) {
        update.postalCode = req.body.postalCode;
    }
    if (req.body.secondaryPostalCode) {
        update.secondaryPostalCode = req.body.secondaryPostalCode;
    }
    if (req.body.availability) {
        update.availability = req.body.availability;
    }
    if (req.body.additionalNotes) {
        update.additionalNotes = req.body.additionalNotes;
    }
    if (req.body.licensed) {
        update.licensed = req.body.licensed;
    }
    if (req.body.hasVehicle) {
        update.hasVehicle = req.body.hasVehicle;
    }
    Volunteer.findByIdAndUpdate(req.params.id, update)
        .then(ll => {
            console.log("updated volunteer");
        })
        .catch(error => {
            console.log(error);
        });
};

exports.acceptText = function (req, res) {
    let body = req.body.Body;
    let fromPhone = req.body.From.slice(-10);
    var twiml = new twilio.twiml.MessagingResponse();

    if (body.toLowerCase() === "yes" || body.toLowerCase() === "no") {
        console.log("response is yes");

        Volunteer.findOne({ phone: fromPhone }, function (err, vol) {
            if (err) {
                console.log(err);
                return res.status(404).send({ message: "no such volunteer" });
            } else {
                Lifts.find({ status: "posted", hasVolunteer: false, volunteer: vol._id })
                    .then(item => {

                        if (body.toLowerCase() === "yes") {
                            if (item.length === 0) {
                                twiml.message(`Thanks but there is already a volunteer`);
                                //res.writeHead(200, { "Content-Type": "text/xml" });
                                res.status(200).send(twiml.toString());
                                return;
                            }
                            item[0].volunteer.pull(vol);
                            Lifts.findOneAndUpdate({ _id: item[0]._id }, { hasVolunteer: true, chosenVolunteer: vol, status: "ongoing" })
                                .then(ll => {
                                    console.log(ll.volunteer);
                                    console.log("updated");
                                })
                                .catch(error => {
                                    console.log(error);
                                });

                            twiml.message(
                                `You have been confirmed as the volunteer at ${item[0].address}`
                            );
                        } else {
                            twiml.message(
                                `Got your response.`
                            );
                            if (item.length === 0) {
                                return;
                            }
                            else {
                                
                            }
                        }

                        //res.writeHead(200, { "Content-Type": "text/xml" });
                        res.status(200).send(twiml.toString());
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
        // if body is yes && hasvolunteer is false , change lift model hasvolunteer to true and change volunteer number to formPhone
    } else {
        // volunteer said no they cant do the lift
        // twiml.message('Got your response, replying you...');
        //   res.writeHead(200, {'Content-Type': 'text/xml'});
        res.send({ message: "incorrect response" });
    }
};