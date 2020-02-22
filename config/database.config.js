/** 
 * This used for connection purpose from model to knex  
 **/

const Tunnel = require('tunnel-ssh')
const {Model, ref} = require('objection')
const Knex = require('knex')
const dbConfig = require('./knexfile')

// Configuration SSH
let sshConfig = {
    host: process.env.SSH_HOST,
    port: 22,
    username: process.env.SSH_USERNAME,
    password: process.env.SSH_PASSWORD,
    keepaliveInterval: 60000,
    keepAlive: true,
    dstHost: process.env.DB_HOST,
    dstPort: process.env.SSH_DB_PORT,
    localHost: process.env.DB_HOST,
    localPort: process.env.DB_PORT
}

// Connection database with tunnel
Tunnel(sshConfig, async (err, server) => {
    if(err) throw err.message

    const config = process.env.NOTE_ENV === 'development' 
        ? dbConfig.development 
        : dbConfig.production

    const knex = Knex(config)

    Model.knex(knex)
})

module.exports = {Model, ref}