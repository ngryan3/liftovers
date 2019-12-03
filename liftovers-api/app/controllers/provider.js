var Provider = require("../models/provider.js");


// Create and Save a new Note
exports.create = function(req, res) {
  // Create and Save a new Note
  if (!req.body.contactName) {
    return res.status(400).send({ message: "Contact Name can not be empty" });
  }

  var provider = new Provider({
    contactName: req.body.contactName,
    contactSurname: req.body.contactSurname,
    contactEmail: req.body.contactEmail,
    contactPhone: req.body.contactPhone,
    methodOfCommunication: req.body.methodOfCommunication,
    location: req.body.location,
    hours: req.body.hours,
    acceptedFoods: req.body.acceptedFoods,
    unacceptableFoods: req.body.unacceptableFoods,
  });


  provider.save(function(err, data) {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Some error occurred while creating the Provider." });
    } else {
      res.send(data);
    }
  });
};


exports.findAll = function(req, res) {
  // Retrieve and return all providers (not deleted) from the database.
  let { page = 1, limit = 100 } = req.query;

  Provider.paginate({ status: {'$ne': "deleted"} }, { page, limit }).then(providers => {
    if (!providers)
      return res.status(404).send({ message: "No Providers found." });
    return res.status(200).send(providers);
  });
};


exports.findId = function(req, res) {
  // Return povider whose id == id given in url.
  Provider.find({ _id: req.params.id }).then(poviders => {
      if (!poviders)
        return res.status(404).send({ message: "No poviders with given id found." });
      return res.status(200).send(poviders);
  });
};


exports.deleteProvider = function(req, res) {
  Provider.findOneAndUpdate({ _id: req.params.id }, { status: "deleted" })
      .then(ll => {
          console.log("changed provider status to deleted");
      })
      .catch(error => {
          console.log(error);
      });
};


exports.updateProvider = function (req, res) {
  let update = {}

  if (req.body.contactName) {
      update.contactName = req.body.contactName
  }
  if (req.body.contactSurname) {
      update.contactSurname = req.body.contactSurname
  }
  if (req.body.contactEmail) {
      update.contactEmail = req.body.contactEmail
  }
  if (req.body.contactPhone) {
      update.contactPhone = req.body.contactPhone
  }
  if (req.body.methodOfCommunication) {
      update.methodOfCommunication = req.body.methodOfCommunication
  }
  if (req.body.location) {
      update.location = req.body.location
  }
  if (req.body.hours) {
      update.hours = req.body.hours
  }
  if (req.body.acceptedFoods) {
      update.acceptedFoods = req.body.acceptedFoods
  }
  if (req.body.unacceptableFoods) {
      update.unacceptableFoods = req.body.unacceptableFoods
  }

  Provider.findByIdAndUpdate(req.params.id, update)
      .then(provider => {
          if (!provider) {
              console.log("no providers with given id found");
          }
          else {
              console.log("updated providers");
          }
      })
      .catch(error => {
          console.log(error);
      });
};