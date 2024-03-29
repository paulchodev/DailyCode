// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

//P: array of age and handicap of each player
//R: return a new array categorizing each player as 'open' or 'senior'
//E: given [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]], result ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//   given [[45, 12],[55,21],[19, -2],[104, 20]], result ['Open', 'Senior', 'Open', 'Senior'
//   given [[3, 12],[55,1],[91, -2],[53, 23]]), result ['Open', 'Open', 'Open', 'Open']
//PC: create a function that maps new array of each player in each category
function openOrSenior(data){
    return data.map(([age, handicap])=> (age>54 && handicap>7)?'Senior':'Open')
}