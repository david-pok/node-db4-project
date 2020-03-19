const express = require("express");

const Rec = require("./recModel");

const router = express.Router();

router.get("/", (req, res) => {
  Rec.getRecipes()
    .then(recs => {
      res.status(200).json(recs);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to get recipes" });
    });
});

router.get("/:id/list", (req, res) => {
  let id = req.params.id;

  Rec.getShoppingList(id)
    .then(list => {
      res.status(200).json(list);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to get shopping list" });
    });
});

router.get("/:id/steps", (req, res) => {
  let id = req.params.id;

  Rec.getSteps(id)
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to get steps" });
    });
});

module.exports = router;
