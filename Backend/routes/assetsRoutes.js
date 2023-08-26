const express = require('express');
const router = express.Router();
const {
    getAssets,
    postAssets,
    putAssets,
    deleteAssets,
    idRequired
} = require('../controllers/assetControllers')

// GET and POST routes for /assets
router.route('/')
    .get(getAssets)
    .post(postAssets)
    .put(idRequired)
    .delete(idRequired);

// PUT and DELETE routes for /assets/:id
router.route('/:id')
    .put(putAssets)
    .delete(deleteAssets);

module.exports = router;
