const express = require('express');
const router = express.Router();
const connectController = require('../controllers/connectController');

router.get('/', connectController.getAllConnections);
router.get('/:id', connectController.getConnectionById); // GET by ID
router.post('/', connectController.createConnection);
router.put('/:id', connectController.updateConnection); // PUT (Update)
router.delete('/:id', connectController.deleteConnection); // DELETE

module.exports = router;
