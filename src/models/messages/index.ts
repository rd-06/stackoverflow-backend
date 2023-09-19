import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    sentBy: {
        type: String,
        required: true,
        enum: ['user', 'bot', 'agent']
    },
    _user: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, { timestamps: true });

const MESSAGE = mongoose.model('MESSAGE', messageSchema);

export { MESSAGE };
