var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

var VolunteerSchema = mongoose.Schema(
  {
    name: String,
    phone: String,
    postalCode: String,
    availability: Object
  },
  {
    timestamps: true
  }
);

VolunteerSchema.plugin(mongoosePaginate);
// "team2volunteers" is the collections that we are using
module.exports = mongoose.model("Team2volunteers", VolunteerSchema);
