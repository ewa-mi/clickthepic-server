const { user, scoreList } = require('./models');

async function getUserWithScores(){
  const freek = await user.findByPk(2, {include: [scoreList]});
  console.log(freek.scoreList);
}
async function getScoreListWithUser(){
  const ewasList = await scoreList.findOne({where: {userId: 1},include: [user]})
  console.log(ewasList);
}
async function getScoreListDescending(lang){
  const descByLang = await scoreList.findAll({order: [[lang, 'DESC']], include: [user]})
  console.log(descByLang);
}

//getUserWithScores();
//getScoreListWithUser();
getScoreListDescending('de');