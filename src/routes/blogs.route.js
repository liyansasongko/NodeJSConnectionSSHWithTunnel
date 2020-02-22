const blogController = require('../controllers/blogs.controller')

module.exports = (app) => {
    app.post('/blog/create', blogController.create)
    app.get('/blogs', blogController.findAll)
    app.get('/blog/:id', blogController.findById)
    app.put('/blog/:id', blogController.update)
    app.delete('/blog/:id', blogController.delete)
}