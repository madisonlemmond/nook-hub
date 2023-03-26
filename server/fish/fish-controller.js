const fetch = require('node-fetch');
const url = 'https://acnhapi.com/v1a';

const getAllFish = (req, res) => {
    const fetchData = fetch(`${url}/fish`)
        .then(response => {
            response.json()
            .then(data => {
                res.send(data);
            });
        });
}

const getFishById = (req, res) => {
    console.log('here')
    const id = req.params.id;
    const fetchData = fetch(`${url}/fish/${id}`)
        .then(response => {
            response.json()
            .then(data => {
                res.send(data);
            })
        })
}

module.exports = {getAllFish, getFishById};