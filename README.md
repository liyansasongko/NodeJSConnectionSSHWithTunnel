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

## Deployment

Add additional notes about how to deploy this on a live system

## Credits
* **Liyan Sasongko**