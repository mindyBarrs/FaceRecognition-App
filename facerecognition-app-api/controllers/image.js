const Clarifai = require("clarifai");

// For accessing the API
const app = new Clarifai.App({
    apiKey: 'YOUR FREE API KEY GOES HERE'
});

const handleApiCall = (req, res) => {
    app.models
    .predict( Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Unable to work with the API'));
}

const handleImage = (db) => (req, res) =>{
    const { id } = req.body;
    
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0])
    })
    .catch(err => res.status(400).json('Unable to get entries.'));
};

module.exports = {
    handleImage,
    handleApiCall
};
