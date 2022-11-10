const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/hello").get(controllers.hello);

router.route("/sources").get(controllers.sources);

router.route("/api/addSource").post(controllers.addSource);

router.route("/api/deleteSource/:id").post(controllers.deleteSource);

module.exports = router;