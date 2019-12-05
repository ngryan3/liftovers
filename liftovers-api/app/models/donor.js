var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

var DonorSchema = mongoose.Schema({
    organizationName: String,
    contactName: String,
    contactSurname: String,
    contactEmail: String,
    contactPhone: String,
    methodOfCommunication: String,
    location: String,
    hours: {
        day: String,
        time: {
            hour: Number,
            minute: Number,
            }
        },
    // active/ deleted
    status: {type: String, default: "active"},
    typeOfFood: String,
    recurring: Boolean,
    recurringTimes: {
        day: String,
        time: {
            hour: Number,
            minute: Number,
            }
        },
    accessNotes: String,
    },
    {
      timestamps: true
    });

DonorSchema.plugin(mongoosePaginate);
// "team2donors" is the collections that we are using
module.exports = mongoose.model("Team2donors", DonorSchema);