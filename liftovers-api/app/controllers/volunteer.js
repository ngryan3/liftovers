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

// mapsCall = (origin, dest) => {
//   return axios({
//     method: "get",
//     url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${dest}&key=AIzaSyD_LPYQsjwLnEh1fcK74vSsytYgvWHndZQ`
//   });
// };

// sendText = (phone, pickupAddress) => {
//   return client.messages.create({
//     body: `Can you pick up the food item at ${pickupAddress}, reply coming soon...`,
//     to: `+1${phone}`, // Text this number
//     from: "+16476994801" // From a valid Twilio number
//   });
// };

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


//  exports.getDistance = function(req, res) {
//    var postalCodes = [];
//    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

//    if (!req.body) {
//      return res.status(400).send({ message: "Body can not be empty" });
//    }

//    let distancevolunteers = this.getVolunteers();

//    distancevolunteers.then(vol => {
//      vol.forEach(volunteer => {
//        postalCodes.push(volunteer.postalCode);
//      });

//      let promises = postalCodes.map(postalcode => {
//        return this.mapsCall(req.body.origin, postalcode);
//      });

//      Promise.all(promises)
//        .then(values => {
//          let valData = values
//            .map((item, index) => {
//              return {
//                data: item.data.rows[0].elements[0],
//                volunteer: vol[index]
//              };
//            })
//            .sort(function(a, b) {
//              let itemA = a.data.duration.value; // ignore upper and lowercase
//              let itemB = b.data.duration.value; // ignore upper and lowercase
//              if (itemA < itemB) {
//                return -1;
//              }
//              if (itemA > itemB) {
//                return 1;
//              }
//              return 0;
//            });

//          let timeSorted = valData
//            // .filter(item => {
//            //   let bool = false;

//            //   req.body.availability.forEach(available => {
//            //     item.volunteer.availability.forEach(volAvail => {
//            //       if (
//            //         weekdays[available.date.getDay()] === volAvail.day.toLowerCase()
//            //       ) {
//            //         bool = true;
//            //       }
//            //     });
//            //   });
//            //   return bool;
//            // })
//            .filter(item => {
//              let bool = false;

//              // req.body.availability.forEach(available => {
//              item.volunteer.availability.forEach(volAvail => {
//                if ( volAvail.day.toLowerCase() === weekdays[available.date.getDay()] ) {
//                  if (
//                    (volAvail.timeFinish.hour > req.body.pickupTime.hour &&
//                      volAvail.timeStart.hour < req.body.pickupTime.hour) ||
//                    (volAvail.timeFinish.hour === req.body.pickupTime.hour &&
//                      volAvail.timeFinish.minute > req.body.pickupTime.minute) ||
//                    (volAvail.timeStart.hour === req.body.pickupTime.hour &&
//                      volAvail.timeStart.minute < req.body.pickupTime.minute)
//                  ) {
//                    bool = true;
//                  }
//                }
//              });
//              // });
//              return bool;
//            });

//          let textPromises = timeSorted.map(item => {
//            return this.sendText(item.volunteer.phone, req.body.origin);
//          });

//          console.log(textPromises);

//          Promise.all(textPromises)
//            .then(promiseitem => {
//              console.log(promiseitem);
//            })
//            .catch(error => {
//              console.log(error);
//            });
//          return res.status(200).send(timeSorted);
//        })
//        .catch(error => {
//          console.log(error);
//        });
//    });
//  };


exports.acceptText = function (req, res) {
    let body = req.body.body;
    let fromPhone = req.body.from;
    var twiml = new twilio.twiml.MessagingResponse();

    if (body === "yes") {
        console.log("//////// response is yes");

        // if body is yes && hasvolunteer is false , change lift model hasvolunteer to true and change volunteer number to formPhone
        Lifts.find({ hasVolunteer: false, "volunteer.phone": fromPhone })
            .then(item => {
                console.log(item);

                if (item.length === 0) {
                    twiml.message(`Thanks but there is already a volunteer`);
                    res.writeHead(200, { "Content-Type": "text/xml" });
                    res.end(twiml.toString());
                    return;
                }

                let chosenVolunteer = item[0].volunteer.filter(vol => {
                    return vol.phone === fromPhone;
                });

                Lifts.findOneAndUpdate({ _id: item[0]._id }, { hasVolunteer: true, chosenVolunteer: chosenVolunteer })
                    .then(ll => {
                        console.log("updated");
                    })
                    .catch(error => {
                        console.log(error);
                    });

                twiml.message(
                    `You have been confirmed as the volunteer at ${item[0].origin}`
                );
                res.writeHead(200, { "Content-Type": "text/xml" });
                res.end(twiml.toString());
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        // volunteer said no they cant do the lift
        //   twiml.message('Got your response, replying you...');
        //   res.writeHead(200, {'Content-Type': 'text/xml'});
        //   res.end(twiml.toString());
    }
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
    // Retrieve and return all notes from the database.
    let { page = 1, limit = 100 } = req.query;

    Volunteer.paginate({}, { page, limit }).then(volunteers => {
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
    })
}

exports.updateVolunteer = function (req, res) {
    let update = {}
    if (req.body.name) {
        update.name = req.body.name
    }
    if (req.body.surname) {
        update.surname = req.body.surname
    }
    if (req.body.email) {
        update.email = req.body.email
    }
    if (req.body.phone) {
        update.phone = req.body.phone
    }
    if (req.body.methodOfCommunication) {
        update.methodOfCommunication = req.body.methodOfCommunication
    }
    if (req.body.postalCode) {
        update.postalCode = req.body.postalCode
    }
    if (req.body.secondaryPostalCode) {
        update.secondaryPostalCode = req.body.secondaryPostalCode
    }
    if (req.body.availability) {
        update.availability = req.body.availability
    }
    if (req.body.additionalNotes) {
        update.additionalNotes = req.body.additionalNotes
    }
    if (req.body.licensed) {
        update.licensed = req.body.licensed
    }
    if (req.body.hasVehicle) {
        update.hasVehicle = req.body.hasVehicle
    }
    Volunteer.findByIdAndUpdate(req.params.id, update)
        .then(ll => {
            console.log("updated volunteer");
        })
        .catch(error => {
            console.log(error);
        })
}