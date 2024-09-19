const geoController = require('../controllers/geo')

const setUpRoutes = (app) => {
    app.use(`/api/v1/geo`, geoController)
}

module.exports.setUpRoutes = setUpRoutes;