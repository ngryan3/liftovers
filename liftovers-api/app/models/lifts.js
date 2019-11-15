var mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");

var LiftSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    postalCode: String,
    date: Date,
    // email or phone
    commmunicationMethod: String,
    // time when food is served
    serveTime: {
        hour: Number,
        minute: Number,
    },
    // time when food should be picked up
    pickupTime: {
        hour: Number,
        minute: Number,
    },   
    hasVolunteer: { type: Boolean, default: false },
    volunteer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'team2volunteers' }],
    // requested/ posted/ ongoing/ completed/ cancelled/ problem
    status: String,
    // pickup address
    address: String,
    // description of food
    description: String,
    // Additional details (e.g. Buzzer code, specific directions, etc.)
    details: String,
    disclaimerChecked: Boolean,
    chosenVolunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'team2volunteers' }
}, {
    timestamps: true
});

LiftSchema.plugin(mongoosePaginate);
// "team2lifts" is the collections name that we are using
module.exports = mongoose.model('team2lifts', LiftSchema);