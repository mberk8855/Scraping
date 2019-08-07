// // Headline model
// // ==============

// // Require mongoose
// var mongoose = require("mongoose");

// // Create a schema class using mongoose's schema method
// var Schema = mongoose.Schema;

// // Create the headlineSchema with our schema class
// var headlineSchema = new Schema({
//   // headline, a string, must be entered

//   // summary, a string, must be entered

//   // url, a string, must be entered

//   // date is just a string

//   // saved, boolean default false
// });

// // Create the Headline model using the headlineSchema
// var Headline = mongoose.model("Headline", headlineSchema);

// // Export the Headline model
// module.exports = Headline;


// router.get("/", headlineController.findAll);
// router.delete("/:id", headlineController.delete);
// router.put("/:id", headlineController.update);

// Controller for our headlines
// ============================
var db = require("../models");

module.exports = {
  // Find all headlines, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Headline
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      });
  },
  // Delete the specified headline
  delete: function(req, res) {
    db.Headline.remove({ _id: req.params.id }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  },
  // Update the specified headline
  update: function(req, res) {
    db.Headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  }
};