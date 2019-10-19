/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
let baseKnowledge=1300;
let advancedKnowledge=800;
let weeks=0;
if (knowsProgramming){
  weeks= Math.ceil(advancedKnowledge/config[focus]);
  }
else
weeks= Math.ceil(baseKnowledge/config[focus]);
  return weeks;
  };
  