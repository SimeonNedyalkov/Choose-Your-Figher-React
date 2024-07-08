const { Schema, model, Types } = require('mongoose');

const fighterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Title is required'],
    },
    strength: {
        type: String,
        required: [true, 'Ingredients are required'],
    },
    speed: {
        type: String,
        required: [true, 'Instructions are required'],
    },
    intelligence: {
        type: String,
        required: [true, 'Description is required'],
    },
    itemsList: {
        type: [Types.ObjectId],
        ref: 'User',
        default: []
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Fighter = model('Fighter', fighterSchema);

module.exports = {
    Fighter
};