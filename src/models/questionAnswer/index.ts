import mongoose, { Schema } from 'mongoose';

const answerMetaSchema = new Schema({
    data: {
        type: String
    },
    isAccepted: {
        type: Boolean,
        default: false
    }
}, { _id: false })

const questionMetaSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    tags: {
        type: []
    }

}, { _id: false });

const questionAnswerSchema = new Schema({
    _question: {
        type: String
    },
    questionMeta: {
        type: questionMetaSchema,
    },
    answerMeta: {
        type: [answerMetaSchema]
    },
    createdBy: {
        type: String
    },
}, { timestamps: true });

const QUESTIONANSWER = mongoose.model('QUESTIONANSWER', questionAnswerSchema);

export { QUESTIONANSWER };
