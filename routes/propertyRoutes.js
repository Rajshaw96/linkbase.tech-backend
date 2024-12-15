const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/', propertyController.getAllProperties);
router.get('/:id', propertyController.getPropertyById); // GET by ID
router.post('/', propertyController.createProperty);
router.put('/:id', propertyController.updateProperty); // PUT (Update)
router.delete('/:id', propertyController.deleteProperty); // DELETE

module.exports = router;
