const Operation = require("../models/Operation");

exports.createOperation = async (req, res) => {
  const op = await Operation.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id
  });
  res.json(op);
};

exports.getUserOperations = async (req, res) => {
  const ops = await Operation.find({ user: req.user.id });
  res.json(ops);
};

exports.getAllOperations = async (req, res) => {
  const ops = await Operation.find().populate("user", "name email");
  res.json(ops);
};

exports.updateStatus = async (req, res) => {
  const op = await Operation.findById(req.params.id);
  op.status = req.body.status;
  await op.save();
  res.json(op);
};