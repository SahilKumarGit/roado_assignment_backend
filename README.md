# Roado Assignment ( Vocabulary web app)

[DEMO](https://roadox.herokuapp.com/)

The task is to create a simple Vocabulary web app by using
- BACKEND: NodeJS, MongoDB, ExpressJS and Oxford Dictionaries Developer API
- FRONTEND: ReactJS, Redux and MUI

## BACKEND
##### Model
- Word Model
 
```javascript
{
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
}
```
## Vocabulary APIs 
### GET/list
- Allow the client to fetch all vocabulary's list (`words` collection).
- _**On success**_ - Return HTTP status `200` . Also return the vocabulary documents list. The response should be a JSON object like [this](#successful-response-structure)
-  _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)


### GET/list/:word
- Allow the client to search from vocabulary's (`words` collection).
- _**On success**_ - Return HTTP status `200` . Also return the vocabulary documents list. The response should be a JSON object like [this](#successful-response-structure)
-  _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)


### POST/add
- Allow the client to add words to the `words` collection.
- check the particular word is exist in [Oxford Dictionaries Developer API](https://developer.oxforddictionaries.com/) then add all field-values to `words` collection
- _**On success**_ - Return HTTP status `200` . Also return the vocabulary documents list. The response should be a JSON object like [this](#successful-response-structure)
-  _**On error**_ - Return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)



### Successful Response structure
```yaml
{
  status: true,
  message: "",
  data: { ... }
}
```

### Error Response structure
```yaml
{
  status: false,
  message: ""
}
```

## FRONTEND
##### Frontend part is in another GitHub repo
➡️ [Go to Frontend Repo](https://github.com/SahilKumarGit/roado_assignment_frontend)
