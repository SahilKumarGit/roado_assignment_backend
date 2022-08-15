const { oxfordModel } = require("../model/oxford.model")
let count = 0
module.exports.listing = async (req, res) => {
    try {
        console.log(++count, ' times call')
        const search = req.params.word
        const query = {}
        if (search && search.trim()) {
            query.word = { $regex: search, $options: "i" }
        }

        const list = await oxfordModel.find(query).sort({ createdAt: -1 }).select({ __v: 0, createdAt: 0, updatedAt: 0, language: 0, id: 0, "lexicalEntries.language": 0, "lexicalEntries.text": 0 })
        if (list.length <= 0) return res.status(404).send({ status: !true, message: 'Words List Unvalable!' })
        return res.status(200).send({ status: true, data: list })
    } catch (e) {
        console.log(e)
        return res.status(500).send({ status: !true, message: e.message })
    }
}