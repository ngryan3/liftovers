var mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,
    methodOfCommunication: String,
    password: String,
    // volunteer/ admin/ superAdmin
    role: {type: String, default: "volunteer"},
    // waitingApproval/ active/ deleted
    status: String,
    volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team2volunteers' },
    resetPasswordToken: String,
    resetPasswordExpires: String
}, {
    timestamps: true
});

UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err){
            return next(err)
        }
        user.password = hash;
        next();
    })
});


UserSchema.plugin(mongoosePaginate);
// "team2users" is the collections that we are using
module.exports = mongoose.model("Team2users", UserSchema);
