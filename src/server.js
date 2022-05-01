require('dotenv/config');
require('./models/index');

const {listenApp, db} = require('./boot');

// ENV VARIABLES
let {APP_PORT, APP_URL} = process.env;


db.conn.sync({ force: true}).then(() => {
    console.info("DB established");
}).catch((err) => console.error(err));



listenApp(APP_PORT || process.env.PORT, APP_URL);

