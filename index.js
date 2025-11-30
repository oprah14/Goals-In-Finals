const { fifaData } = require('./fifa.js');

const goalsInFinals = (data) => {
  const finalMatches = data.filter((match) => match.Stage === 'Final');
  const goalsCount = {};

  finalMatches.forEach((match) => {
    const homeTeam = match['Home Team Name'];
    const awayTeam = match['Away Team Name'];
    const homeGoals = match['Home Team Goals'];
    const awayGoals = match['Away Team Goals'];

    goalsCount[homeTeam] = (goalsCount[homeTeam] || 0) + homeGoals;
    goalsCount[awayTeam] = (goalsCount[awayTeam] || 0) + awayGoals;
  });

  return goalsCount;
};


module.exports = goalsInFinals;
