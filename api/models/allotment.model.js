const mongoose = require('mongoose')

const allotmentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String,
        enum: ['fixedDesk', 'hotDesk', 'office', 'meetingRoom']
    },
    quantity: {
        type: Number
    },
    status: {
        type: String,
        enum: ['active', 'disabled'],
        default: 'active'
    }
})

module.exports = allotmentSchema;