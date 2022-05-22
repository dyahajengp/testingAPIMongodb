const db = require('../models');

const Post = db.posts;

exports.findAll = (req, res) => {
  Post.find()
    .then((result) => {
      res.send(result);
    }).catch((error) => {
      res.status(500).send({
        message: error.message || 'Some error while retrieving posts.',
      });
    });
};

exports.create = (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    published: req.body.published ? req.body.published : false,
  });

  post.save(post)
    .then((result) => {
      res.send(result);
    }).catch((error) => {
      res.status(409).send({
        message: error.message || 'Some error while create posts.',
      });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;

  Post.findById(id)
    .then((result) => {
      res.send(result);
    }).catch((error) => {
      res.status(409).send({
        message: error.message || 'Some error while show posts.',
      });
    });
};
