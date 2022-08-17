const axios = require('axios').default;
require('dotenv').config()

module.exports.oxfordCallResult = async (word = "piecemeal") => {
    try {
        const url = `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word.toLowerCase()}?strictMatch=false`
        const headers = {
            "Accept": "application/json",
            "app_id": process.env.OXFORD_ID,
            "app_key": process.env.OXFORD_KEY
        }
        const oxford = await axios.get(url, { headers })
        if (oxford.data.error) return { status: false, message: oxford.data.error }
        const data = {
            data: oxford.data.results,
            status: true
        }
        return data
    } catch (e) {
        console.log('-Error from oxfordCall.js')
        return { status: false, message: 'Please enter a valid word!' }
    }
}
