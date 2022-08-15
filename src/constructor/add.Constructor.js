const { oxfordModel } = require("../model/oxford.model")
const { oxfordCallResult } = require("../oxfordCall/oxfordCall")

module.exports.add = async (req, res) => {
    try {
        const word = req.body.word
        if (!word || !word.trim()) return res.status(400).send({ status: !true, message: 'Please enter a word first!' })

        //check if word already exist in db
        const isAlreadyExist = await oxfordModel.count({ word })
        if (isAlreadyExist > 0) return res.status(400).send({ status: !true, message: "The word already exists in your list!" })

        //get word data from api call
        const response = await oxfordCallResult(word)
        if (!response.status) return res.status(404).send({ status: !true, message: response.message })
        // console.log(response.data)

        //reverse the array
        console.log(response.data)
        for(let each of response.data){
            each.lexicalEntries.reverse()
        }
        

        //save the received data in db
        await oxfordModel.insertMany(response.data)
        const list = await oxfordModel.find().sort({ createdAt: -1 }).select({ __v: 0, createdAt: 0, updatedAt: 0, language: 0, id: 0, "lexicalEntries.language": 0, "lexicalEntries.text": 0 })
        return res.status(200).send({ status: true, data: list, message: '✅ Word added successfully!' })
    } catch (e) {
        console.log('-Error in add word collection',e)
        return res.status(500).send({ status: !true, message: e.message })
    }
}