const express = require('express');
const router = express.Router();

const db = require("../db_connection");

router.get('/', async (req, res, next) => {

  try {
    const [results, metadata] = await db.query("SELECT * FROM commande");
    //console.log(metadata);
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
