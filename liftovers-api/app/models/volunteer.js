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
// "Volunteer" is the collections name. We are most likely creating our own and this will be changed
module.exports = mongoose.model("Volunteer", VolunteerSchema);
