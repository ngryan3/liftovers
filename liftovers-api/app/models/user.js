var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    userName: String,
    password: String,
    // volunteer/ admin/ superAdmin
    role: String,
    // waitingApproval/ active/ deleted
    status: String,
    volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team2volunteers' }
}, {
    timestamps: true
});

UserSchema.plugin(mongoosePaginate);
// "team2users" is the collections that we are using
module.exports = mongoose.model("Team2users", UserSchema);