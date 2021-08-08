
    const Offer = require('../Models/Offer');   

    exports.listOffers = async (req,res, next) => {      
      try{
        const offers = await Offer.find({ "servernotified": { "$ne": req.params.id }});
        res.status(200).json(offers); 
      }
      catch(err)
      {
        res.status(400).json({"code" : 400, "message" : err});
      }
           
    };

     exports.offerNotifiedUpdate = async (req,res,next) => {      
      try
      {
        let servernotified = new Array();
        const query = { _id: req.body._id};
        servernotified = req.body.servernotified;
        servernotified.push(req.params.id);
        const update = {$set: {servernotified: servernotified}};
        const options = {};
        const resultDB = await Offer.updateOne(query,update,options);
        res.status(200).json(resultDB); 
      }
      catch(err)
      {
        res.status(400).json({"code" : 400, "message" : err});
      }  
    };


 