const mongoose = require('mongoose');
const newpost = mongoose.model('newpost');

module.exports = (app) => {

    app.get(`/api/newpost`, async(req, res) => {
        let newPost = await newpost.find();
        return res.status(200).send(newPost);
    })

    app.post(`/api/newpost`, async(req, res) => {
        let newPost = await newpost.create(req.body);
        return res.status(201).send({
            error: false,
            newPost
        })
    })
}