const mongoose = require('mongoose')

const oxfordSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        required: true
    },
    word: {
        type: String,
        required: true
    },
    language: String,
    lexicalEntries: [{
        entries: [{
            etymologies: [String],
            pronunciations: [{
                audioFile: {
                    type: String,
                    required: true
                },
                dialects: [String],
                phoneticNotation: {
                    type: String,
                    required: true
                },
                phoneticSpelling: {
                    type: String,
                    required: true
                }
            }],
            senses: [{
                definitions: [String],
                examples: [{
                    text: String
                }],
                id: String,
                shortDefinitions: [String]
            }]
        }],
        language: String,
        lexicalCategory: {
            id: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
        text: String
    }]
}, {
    timestamps: true
})
module.exports.oxfordModel = mongoose.model('word', oxfordSchema)