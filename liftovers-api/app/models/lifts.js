var mongoose = require('mongoose');

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
    volunteer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team2volunteers' }],
    // draft/ posted/ ongoing/ completed/ canceled/ problem
    status: String,
    chosenVolunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'Team2volunteers' }
}, {
    timestamps: true
});

// "team2lifts" is the collections name that we are using
module.exports = mongoose.model('Team2lifts', LiftSchema);