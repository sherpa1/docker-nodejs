const express = require('express');
const router = express.Router();

const knex = require('../knex');

router.get('/', async (req, res, next) => {
  let results;

  try {
    results = await knex("commande");
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
