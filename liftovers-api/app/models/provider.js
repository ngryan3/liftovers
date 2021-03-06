var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

var ProviderSchema = mongoose.Schema({
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
            openingHour: Number,
            openingMinute: Number,
            closingHour: Number,
            closingMinute: Number,
            }
        },
    // active/ deleted
    status: {type: String, default: "active"},
    acceptedFoods: String,
    unacceptableFoods: String,
    },
    {
       timestamps: true
    });

ProviderSchema.plugin(mongoosePaginate);
// "team2providers" is the collections that we are using
module.exports = mongoose.model("Team2providers", ProviderSchema);