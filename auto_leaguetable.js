// variables declaration
var i, j, k, matchday, teamA, teamB;
// Generate a new team
class team {
    // class of team data
    score;
    weight;
    name;
    pld;
    win;
    draw;
    loss;
    gf;
    ga;
    gd;
    pts;
}

// Create new engteams Premier league
var mci = new team(),
    ars = new team(),
    liv = new team(),
    mcu = new team(),
    tot = new team(),
    che = new team(),
    nec = new team(),
    bri = new team(),
    whm = new team(),
    ast = new team(),
    lei = new team(),
    cry = new team(),
    ful = new team(),
    eve = new team(),
    bre = new team(),
    ips = new team(),
    wol = new team(),
    not = new team(),
    sou = new team(),
    bou = new team();
// hold english teams in a group
var engteams = [
    mci,
    ars,
    liv,
    mcu,
    tot,
    che,
    nec,
    bri,
    whm,
    ast,
    lei,
    cry,
    ful,
    eve,
    bre,
    ips,
    wol,
    not,
    sou,
    bou,
];
// give values for team name only
(mci.name = "Manchester City"),
    (ars.name = "Arsenal"), 
    (liv.name = "Liverpool"), 
    (mcu.name = "Manchester United"), 
    (tot.name = "Tottenham"),
    (che.name = "Chelsea"),
    (nec.name = "Newcasle United"), 
    (bri.name = "Brighton & Hove Albion"),
    (whm.name = "Westham United"),
    (ast.name = "Aston Villa"),
    (lei.name = "Leicester City"),
    (cry.name = "Crystal Palace"), 
    (ful.name = "Fulham"),
    (eve.name = "Everton"),
    (bre.name = "Brentford"), 
    (ips.name = "Ipswich Town"), 
    (wol.name = "Wolverhampton Wanderers"),
    (not.name = "Nottingham Forest"),
    (sou.name = "Southampton"),
    (bou.name = "Bournemouth");
// initial values for win, draw, loss, gf, ga, gd, pts
(mci.win = 0), (mci.draw = 0), (mci.loss = 0), (mci.gf = 0), (mci.ga = 0), (mci.gd = 0), (mci.pts = 0), (mci.weight = 9.2 * 98 * 870 * 8750 * 8750 * 8750 * Math.random()),
    (ars.win = 0), (ars.draw = 0), (ars.loss = 0), (ars.gf = 0), (ars.ga = 0), (ars.gd = 0), (ars.pts = 0), (ars.weight = 9.2 * 96 * 870 * 8750 * 8750 * 8750 * Math.random()),
    (liv.win = 0), (liv.draw = 0), (liv.loss = 0), (liv.gf = 0), (liv.ga = 0), (liv.gd = 0), (liv.pts = 0), (liv.weight = 9.2 * 94 * 860 * 8750 * 8750 * 8750 * Math.random()),
    (mcu.win = 0), (mcu.draw = 0), (mcu.loss = 0), (mcu.gf = 0), (mcu.ga = 0), (mcu.gd = 0), (mcu.pts = 0), (mcu.weight = 9.2 * 88 * 800 * 8750 * 8750 * 8500 * Math.random()),
    (che.win = 0), (che.draw = 0), (che.loss = 0), (che.gf = 0), (che.ga = 0), (che.gd = 0), (che.pts = 0), (che.weight = 9.2 * 88 * 800 * 8750 * 8500 * 8500 * Math.random()),
    (tot.win = 0), (tot.draw = 0), (tot.loss = 0), (tot.gf = 0), (tot.ga = 0), (tot.gd = 0), (tot.pts = 0), (tot.weight = 9.2 * 80 * 750 * 8500 * 8500 * 8500 * Math.random()),
    (nec.win = 0), (nec.draw = 0), (nec.loss = 0), (nec.gf = 0), (nec.ga = 0), (nec.gd = 0), (nec.pts = 0), (nec.weight = 9.2 * 80 * 700 * 8500 * 8500 * 8250 * Math.random()),
    (bri.win = 0), (bri.draw = 0), (bri.loss = 0), (bri.gf = 0), (bri.ga = 0), (bri.gd = 0), (bri.pts = 0), (bri.weight = 9.2 * 80 * 650 * 8500 * 8500 * 8250 * Math.random()),
    (ast.win = 0), (ast.draw = 0), (ast.loss = 0), (ast.gf = 0), (ast.ga = 0), (ast.gd = 0), (ast.pts = 0), (ast.weight = 9.2 * 78 * 650 * 8500 * 8250 * 8250 * Math.random()),
    (whm.win = 0), (whm.draw = 0), (whm.loss = 0), (whm.gf = 0), (whm.ga = 0), (whm.gd = 0), (whm.pts = 0), (whm.weight = 9.2 * 78 * 630 * 8500 * 8250 * 8000 * Math.random()),
    (lei.win = 0), (lei.draw = 0), (lei.loss = 0), (lei.gf = 0), (lei.ga = 0), (lei.gd = 0), (lei.pts = 0), (lei.weight = 9.2 * 78 * 600 * 8250 * 8250 * 8000 * Math.random()),
    (cry.win = 0), (cry.draw = 0), (cry.loss = 0), (cry.gf = 0), (cry.ga = 0), (cry.gd = 0), (cry.pts = 0), (cry.weight = 9.2 * 75 * 580 * 8250 * 8250 * 8000 * Math.random()),
    (ful.win = 0), (ful.draw = 0), (ful.loss = 0), (ful.gf = 0), (ful.ga = 0), (ful.gd = 0), (ful.pts = 0), (ful.weight = 9.2 * 75 * 580 * 8250 * 8000 * 7750 * Math.random()),
    (eve.win = 0), (eve.draw = 0), (eve.loss = 0), (eve.gf = 0), (eve.ga = 0), (eve.gd = 0), (eve.pts = 0), (eve.weight = 9.2 * 75 * 580 * 8250 * 8000 * 7750 * Math.random()),
    (bre.win = 0), (bre.draw = 0), (bre.loss = 0), (bre.gf = 0), (bre.ga = 0), (bre.gd = 0), (bre.pts = 0), (bre.weight = 9.2 * 75 * 560 * 8250 * 8000 * 7750 * Math.random()),
    (ips.win = 0), (ips.draw = 0), (ips.loss = 0), (ips.gf = 0), (ips.ga = 0), (ips.gd = 0), (ips.pts = 0), (ips.weight = 9.2 * 70 * 560 * 8000 * 8000 * 7500 * Math.random()),
    (wol.win = 0), (wol.draw = 0), (wol.loss = 0), (wol.gf = 0), (wol.ga = 0), (wol.gd = 0), (wol.pts = 0), (wol.weight = 9.2 * 70 * 560 * 8000 * 7750 * 7500 * Math.random()),
    (not.win = 0), (not.draw = 0), (not.loss = 0), (not.gf = 0), (not.ga = 0), (not.gd = 0), (not.pts = 0), (not.weight = 9.2 * 70 * 560 * 8000 * 7750 * 7500 * Math.random()),
    (sou.win = 0), (sou.draw = 0), (sou.loss = 0), (sou.gf = 0), (sou.ga = 0), (sou.gd = 0), (sou.pts = 0), (sou.weight = 9.2 * 70 * 560 * 8000 * 7750 * 7250 * Math.random()),
    (bou.win = 0), (bou.draw = 0), (bou.loss = 0), (bou.gf = 0), (bou.ga = 0), (bou.gd = 0), (bou.pts = 0), (bou.weight = 9.2 * 70 * 560 * 8000 * 7750 * 7250 * Math.random());


function match_score_generator(team) {
    let score_value;
    score_value = Math.trunc((Math.random() * Math.random() * team.weight * 0.001 * 0.001) / 10000000000);
    if (score_value > 5) {
        score_value = score_value % 10;
    }

    return Math.trunc(score_value);
}
// These functions below are integral and can easily break the code
function match(teamA, teamB) {
    // Generate score for a match
    teamA.score = match_score_generator(teamA);//;
    teamB.score = match_score_generator(teamB);//;

    /* view fixtures of a particular team
    In order to view fixtures for a particular team, change the equated team, for example,
    if (teamA == ips || teamB == ips) below can be changed to another team by:
    i. looking at the initial of the required team (as used in this script above), from the teams names initialization i.e mci.name = "Manchester City"
    ii. then change to:
        if (teamA == mci || teamB == mci) {...}
    */
    if (teamA == ips || teamB == ips) {
        console.log(`${teamA.name} ${teamA.score} - ${teamB.score} ${teamB.name}`)
    }
    
} //  <-- View the fixtures of a particular team in this function
function init() {
    if (teamA.score > teamB.score) {
        teamA.win += 1;
        teamA.draw = teamA.draw;
        teamA.loss = teamA.loss;
        teamA.gf += teamA.score;
        teamA.ga += teamB.score;
        teamA.gd = teamA.gf - teamA.ga;
        teamA.pts += 3;

        teamB.win = teamB.win;
        teamB.draw = teamB.draw;
        teamB.loss += 1;
        teamB.gf += teamB.score;
        teamB.ga += teamA.score;
        teamB.gd = teamB.gf - teamB.ga;
        teamB.pts = teamB.pts;

    } else if (teamB.score > teamA.score) {
        teamB.win += 1;
        teamB.draw = teamB.draw;
        teamB.loss = teamB.loss;
        teamB.gf += teamB.score;
        teamB.ga += teamA.score;
        teamB.gd = teamB.gf - teamB.ga;
        teamB.pts += 3;

        teamA.win = teamA.win;
        teamA.draw = teamA.draw;
        teamA.loss += 1;
        teamA.gf += teamA.score;
        teamA.ga += teamB.score;
        teamA.gd = teamA.gf - teamA.ga;
        teamA.pts = teamA.pts;

    } else if (teamA.score == teamB.score) {
        teamA.win = teamA.win;
        teamA.draw += 1;
        teamA.loss = teamA.loss;
        teamA.gf += teamA.score;
        teamA.ga += teamB.score;
        teamA.gd = teamA.gf - teamA.ga;
        teamA.pts += 1;

        teamB.win = teamB.win;
        teamB.draw += 1;
        teamB.loss = teamB.loss;
        teamB.gf += teamB.score;
        teamB.ga += teamA.score;
        teamB.gd = teamB.gf - teamB.ga;
        teamB.pts += 1;
    }
} // <-- This function takes the match scores and allocates 3 points for a win, 1 point for a draw and 0 points for a loss, also gf, ga, gd
function space(t) {
    let sdiff = 5 - t.toString().length;
    if (sdiff > 0) {
        return " ".repeat(sdiff)
    }
    if (t.toString().length > 5) {
        let max_length = 24;
        let ssdiff = max_length - t.toString().length;
        if (ssdiff > 0) {
            return " ".repeat(ssdiff)
        }
    }
} // <-- This function spaces the items properly on the console
function table(league) {
    // Sort into a table
    console.log("English Premier League Table")
    console.log("SN    NAME                     PLD   W     D     L     GF    GA    GD    PTS");
    for (i = 0; i < league.length; i++) {
        for (j = 0; j < league.length; j++) {
            // Sort according to points
            if (league[i].pts > league[j].pts) {
                let temp = league[i];
                league[i] = league[j];
                league[j] = temp;
            }
            // Sort according to goal difference
            if (league[i].pts == league[j].pts) {
                if (league[i].gd > league[j].gd) {
                    let temp = league[i];
                    league[i] = league[j];
                    league[j] = temp;
                }
            }
            // Sort according to goals scored
            if (league[i].pts == league[j].pts) {
                if (league[i].gd == league[j].gd) {
                    if (league[i].gf > league[j].gf) {
                        let temp = league[i];
                        league[i] = league[j];
                        league[j] = temp;
                    }
                }
            }
            // Sort according to goals accumulated
            if (league[i].pts == league[j].pts) {
                if (league[i].gd == league[j].gd) {
                    if (league[i].gf == league[j].gf) {
                        if (league[i].ga < league[j].ga) {
                            let temp = league[i];
                            league[i] = league[j];
                            league[j] = temp;
                        }
                    }
                }
            }
        }

    }
    for (t in league) {
        console.log(`${Number(t) + 1}${space(Number(t) + 1)} ${league[t].name}${space(league[t].name)} ${league[t].win + league[t].draw + league[t].loss}${space(league[t].win + league[t].draw + league[t].loss)} ${league[t].win}${space(league[t].win)} ${league[t].draw}${space(league[t].draw)} ${league[t].loss}${space(league[t].loss)} ${league[t].gf}${space(league[t].gf)} ${league[t].ga}${space(league[t].ga)} ${league[t].gd}${space(league[t].gd)} ${league[t].pts}${space(league[t].pts)}`);
    }
} // <-- This function displays the league table


/* Matchdays:
i.  First, call the match function on a fixture to generate random scores
ii. Second, let the two teams be teamA and teamB
iii.Third, call the init function to initialize their scores to the generated scores
iv. Perform the above operations for all the fixtures in a matchday
iv. Last, call the table function to display the table
*/

// Matchday 1
match(mcu, ful)
teamA = mcu, teamB = ful;
init();
match(ips, liv);
teamA = ips, teamB = liv;
init();
match(ars, wol);
teamA = ars, teamB = wol;
init();
match(eve, bri)
teamA = eve, teamB = bri;
init();
match(nec, sou)
teamA = nec, teamB = sou;
init();
match(not, bou)
teamA = not, teamB = bou;
init();
match(whm, ast)
teamA = whm, teamB = ast;
init();
match(bre, cry)
teamA = bre, teamB = cry;
init();
match(che, mci)
teamA = che, teamB = mci;
init();
match(lei, tot)
teamA = lei, teamB = tot;
init();

// Call this function to display the table
table(engteams);
