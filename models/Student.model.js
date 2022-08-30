const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: String,
    surmane: String,
    image: String,
    group: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Group'
    },
    email: String,
    notes: []
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;