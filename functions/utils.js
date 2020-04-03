const cherryPick = (obj, picks) => 
  Object.keys(obj).reduce((acc, cur) => 
    picks.indexOf(cur) !== -1
      ? ({ ...acc, [cur]: obj[cur] })
      : ({ ...acc }) 
  , {});

module.exports = {
  cherryPick,
};