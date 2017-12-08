import { normalizePort, onError, onListening } from './utils/utils';
import db from './model'
import * as http from 'http';

import app from './app';

const server  = http.createServer(app);
const port = normalizePort(process.env.port || 3000)

db.sequelize.sync()
    .then(() =>{
        server.listen(port);
        server.on('error',onError(server))
        server.on('listening', onListening(server))
    })

