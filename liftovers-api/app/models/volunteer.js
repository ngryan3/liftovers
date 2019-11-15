var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

var VolunteerSchema = mongoose.Schema(
  {
    name: String,
    surname: String,
    email: String,
    phone: String,
    methodOfCommunication: String,
    postalCode: String,
    secondaryPostalCode: String,
    availability: {
      day: String,
      time: {
        hour: Number,
        minute: Number,
      }
  },
    licensed: Boolean,
    hasVehicle: Boolean,
    additionalNotes: [String],
    lifts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team2lifts' }],
    waiverSigned: Boolean,
    // available/ unavailable/ deleted
    status: String
  },
  {
    timestamps: true
  }
);

VolunteerSchema.plugin(mongoosePaginate);
// "team2volunteers" is the collections that we are using
module.exports = mongoose.model("Team2volunteers", VolunteerSchema);
