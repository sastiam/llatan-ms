const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('../docs/apidoc');

const routes = require('../routes');

const app = express();

app.use(express.urlencoded({ extended: true, limit: "10mb"}));
app.use(express.json({limit: "10mb"}));
app.use(helmet());
app.use(
    cors({
        origin: "*",
        credentials: true,
        methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
        allowedHeaders: [
          "Origin",
          "X-Requested-With",
          "Content-Type",
          "Accept",
          "Authorization",
        ],
      })
);



app.use("/", routes);
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));


app.use((err, req, res, next) => {

    let status = err.status || 500;
    let message = err.message || 'Ocurrio un error intente mas tarde';
    
    res.status(status).json({"error": message});

});


const listenApp = (PORT, URL) => app.listen(PORT).on("error", (err) => {

    switch (err.code) {
        case "EACCES":
            console.error(`BOOT :: ${URL}:${PORT} requires elevated privileges`);
            process.exit(1);

        case "EADDRINUSE":
            console.error(`BOOT :: ${URL}:${PORT} is already in use`);
            process.exit(1);

        default:
            throw err;
    }

}).on("listening", () => {
    
    console.info(`BOOT :: <> <> <> <> <> <> <> <> <> <> Listening on ${URL}:${PORT} <> <> <> <> <> <> <> <> <> <>`);

});

module.exports = listenApp;