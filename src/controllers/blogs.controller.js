const blogModel = require('../models/blogs.model')

// Controller for create data
exports.create = async (req, res) => {
    let name = req.body.name
    let title = req.body.title
    let content = req.body.content

    await blogModel.query().insert({
        "name": name,
        "title": title,
        "content": content
    })
    .then(blog => {
        res.send(blog)
    })
    .catch(err => {
        res.status(500).send(err.message)
        console.log(err.message)
    })
}

// Controller for Select all
exports.findAll = async (req, res) => {
    await blogModel.query()
    .then(blog => {
        res.send(blog)
    })
    .catch(err => {
        res.status(500).send(err.message)
        console.log(err.message)
    })
}

// Controller for select by ID
exports.findById = async (req, res) => {
    await blogModel.query().findById(req.params.id)
    .then(blog => {
        res.send(blog)
    })
    .catch(err => {
        res.status(500).send(err.message)
        console.log(err.message)
    })
}

// Controller for update data
exports.update = async (req, res) => {
    let name = req.body.name
    let title = req.body.title
    let content = req.body.content

    await blogModel.query()
        .findById(req.params.id)
        .patch({
            name: name,
            title: title,
            content: content
        })
    .then(blog => {
        res.send(blog)
    })
    .catch(err => {
        res.status(500).send(err.message)
        console.log(err.message)
    })
}

// Controller for delete data
exports.delete = async (req, res) => {
    await blogModel.query().deleteById(req.params.id)
    .then(blog => {
        res.send(blog)
    })
    .catch(err => {
        res.status(500).send(err.message)
        console.log(err.message)
    })
}
