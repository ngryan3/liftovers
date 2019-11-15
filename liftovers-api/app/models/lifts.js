var mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");

var LiftSchema = mongoose.Schema({
    origin: String,
    availability: {
        day: String,
        time: {
            hour: Number,
            minute: Number,
        }
    },
    hasVolunteer: { type: Boolean, default: false },
    volunteer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'team2volunteers' }],
    // draft/ requested/ posted/ ongoing/ completed/ cancelled/ problem
    status: String,
    chosenVolunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'team2volunteers' }
}, {
    timestamps: true
});

LiftSchema.plugin(mongoosePaginate);
// "team2lifts" is the collections name that we are using
module.exports = mongoose.model('team2lifts', LiftSchema);