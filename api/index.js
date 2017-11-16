// api/index.js
const Router = require('express').Router;
const router = new Router();
const controller = require('../controllers/students');


router.route('/')
  .get((req, res) => res.send({message: "Welcome to Bot's Crash Course"}));


router.route('/students')
  .get((...args) => controller.getStudents(...args))
  .post((...args) => controller.postStudents(...args));

router.route('/students/:_id')
  .get((...args) => controller.getStudentById(...args))
  .put((...args) => controller.putStudent(...args))
  .delete((...args) => controller.deleteStudent(...args));

module.exports = router;
