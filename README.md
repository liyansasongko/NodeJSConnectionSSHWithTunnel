# NodeJSConnectionSSHWithTunnel
Node JS connection database SSH with Tunnel. Knex with Objection

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Requirements
- Node v12.13.1 
- MySQL 5.7
- Knex
- Objection
- Tunnel

### Documentation 
* Read [tunnel-ssh](https://www.npmjs.com/package/tunnel-ssh) for documentation tunnel-ssh.
* Read [knex](http://knexjs.org/) for documentation Knex.
* Read [objection](https://vincit.github.io/objection.js/guide/installation.html) for documentation Objection.

### Installing
A step by step series of examples that tell you how to get a development env running

```
$ git clone https://github.com/liyansasongko/NodeJSConnectionSSHWithTunnel.git
$ cd NodeJSConnectionSSHWithTunnel
$ npm install
$ cp .env.example .env
```
example .env :
```
NOTE_ENV=development
PORT=8080

SSH_HOST=721.x.x.51 // Host database ssh
SSH_PASSWORD=xxxxxxx // Password ssh
SSH_USERNAME=r*** // Username ssh
SSH_DB_PORT=**** // Port database ssh

DB_HOST=127.0.0.1 // host local
DB_PORT=33333 // replacement port ssh to local
DB_NAME=db_app // example database ssh
DB_USER=r*** // username database ssh
DB_PASSWORD= ******* // password database ssh
```
### Running
```
node server.js
```

example connection database ssh with tunnnel-ssh:
```
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

    //......
})
```

## Deployment

Add additional notes about how to deploy this on a live system

## Credits
* **Liyan Sasongko**