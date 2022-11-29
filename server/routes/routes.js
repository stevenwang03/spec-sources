const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.route("/hello").get(controllers.hello);

router.route("/sources").get(controllers.sources);

router.route("/addSource").post(controllers.addSource);

router.route("/deleteSource/:id").get(controllers.deleteSource);

module.exports = router;