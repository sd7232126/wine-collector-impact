// Wine Bottle API (Router Handler)
const mongoose = require('mongoose');

const Bottle = mongoose.model('bottles');

module.exports = app => {
  // Post method of creating new bottle
  app.post('/api/bottles', async (req, res) => {
    const { name, description, producer, year, rating, comment } = req.body;
    const bottle = new Bottle({ name, description, producer, year, rating, comment, _user: req.user.id});
    try {
      await bottle.save();
      res.send(req.user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Post method of updating existing bottle collection
  app.post('/api/bottles/:id', async (req, res) => {
    const { rating, comment } = req.body;
    try {
      const bottle = await Bottle.findByIdAndUpdate(req.params.id, { rating, comment });
      res.send(bottle);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Get method to get list of bottle collections of current login user
  app.get('/api/bottles', async (req, res) => {
    const bottles = await Bottle.find({ _user: req.user.id });
    res.send(bottles);
  });

  // Get method to get specific bottle collection by id
  app.get('/api/bottles/:id', async (req, res) => {
    const bottle = await Bottle.findById(req.params.id);
    res.send(bottle);
  })

  // Delete method to delete specific bottle collection by id
  app.delete('/api/bottles/:id', async (req, res) => {
    await Bottle.deleteOne({ _id: req.params.id });
    res.send(req.user);
  });
};