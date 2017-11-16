const model = require('../models/students');

class StudentsController {
  getStudents(req, res) {
     model.find({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(data);
    });
  }
  postStudents(req, res) {
    let student = new  model(req.body);
    student.save((err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(201).send(data);
    });
  }
  getStudentById(req, res) {
    const _id = req.params._id;
     model.findById(_id, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!data) {
        res.status(404).send({error: `Student ${_id} Not Found!`});
      } else {
        res.status(200).send(data);
      }
    });
  }
  putStudent(req, res) {
    const _id = req.params._id;
     model.findOneAndUpdate({ _id: _id }, { $set: req.body }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(data);
    });
  }
  deleteStudent(req, res) {
    const _id = req.params._id;
     model.remove({ _id: _id }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      if (data.n > 0) {
        res.status(200).send({removed: _id});
      } else {
        res.status(404).send({error: `Student ${_id} Not Found!`});
      }
    });
  }
}

module.exports = new StudentsController();