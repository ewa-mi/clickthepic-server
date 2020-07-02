const { Router } = require("express");
const scoreList = require("../models").scoreList;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.patch('/', authMiddleware, async(req, res) => {
  
  //get the score and language from the request
  const { language, score } = req.body;
  //validate score and language
  if(!language || !score) res.status(400).send('No score or language received');

  try{
    //get the correct user ID (authMiddleware provides this)
    const { id: userId } = req.user
    //get the correct list for the user
    const scoreListToUpdate = await scoreList.findOne({ where: { userId } });
    //update user's list for the correct language
    await scoreListToUpdate.update({ [language]: score });
    res.send({ message: 'Update Success' });

  }catch(e){
    res.send(e);
  }
});

module.exports = router;