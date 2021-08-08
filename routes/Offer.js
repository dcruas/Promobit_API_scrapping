const express = require('express');
const OfferController = require('../controllers/Offer')
const router = express.Router();


router.get('/:id', OfferController.listOffers);

router.post('/update/:id', OfferController.offerNotifiedUpdate);



module.exports = router;