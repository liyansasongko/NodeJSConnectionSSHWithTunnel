const { Model } = require('../../config/database.config')

class Blogs extends Model {
    static get tableName () {
        return 'blogs'
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: ['name', 'title', 'content'],
            properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            title: { type: 'string' },
            content: { type: 'string' }
            }
        }
    }
}

module.exports = Blogs