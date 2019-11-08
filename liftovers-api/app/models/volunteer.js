var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

var VolunteerSchema = mongoose.Schema(
  {
    name: String,
    phone: String,
    postalCode: String,
    availability: {
      day: String,
      time: {
        hour: Number,
        minute: Number,
      }
  },
    lifts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team2lifts' }],
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
