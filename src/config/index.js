const logger = require('./logger-config');

module.exports={
    serverConfig: require('./server-config'),
    Logger: require('./logger-config'),
    connectDB: require('./db-config')
} 