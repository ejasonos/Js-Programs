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

// Matchday 2
match(bri, mcu);
teamA = bri, teamB = mcu;
init();
match(cry, whm);
teamA = cry, teamB = whm;
init();
match(ful, lei);
teamA = ful, teamB = lei;
init();
match(mci, ips)            
teamA = mci, teamB = ips;
init();
match(sou, not)
teamA = sou, teamB = not;
init();
match(tot, eve)
teamA = tot, teamB = eve;
init();
match(ast, ars)
teamA = ast, teamB = ars;
init();
match(bou, nec)
teamA = bou, teamB = nec;
init();
match(wol, che)
teamA = wol, teamB = che;
init();
match(liv, bre)
teamA = liv, teamB = bre;
init();

// Matchday 3
match(ars, bri);
teamA = ars, teamB = bri;
init();
match(bre, sou);
teamA = bre, teamB = sou;
init();
match(eve, bou);
teamA = eve, teamB = bou;
init();
match(ips, ful)
teamA = ips, teamB = ful;
init();
match(lei, ast)
teamA = lei, teamB = ast;
init();
match(not, wol)
teamA = not, teamB = wol;
init();
match(whm, mci)
teamA = whm, teamB = mci;
init();
match(che, cry)
teamA = che, teamB = cry;
init();
match(nec, tot)
teamA = nec, teamB = tot;
init();
match(mcu, liv)
teamA = mcu, teamB = liv;
init();

// Matchday 4
match(sou, mcu);
teamA = sou, teamB = mcu;
init();
match(bri, ips);
teamA = bri, teamB = ips;
init();
match(cry, lei);
teamA = cry, teamB = lei;
init();
match(ful, whm)
teamA = ful, teamB = whm;
init();
match(liv, not)
teamA = liv, teamB = not;
init();
match(mci, bre)
teamA = mci, teamB = bre;
init();
match(ast, eve)
teamA = ast, teamB = eve;
init();
match(bou, che)
teamA = bou, teamB = che;
init();
match(tot, ars)
teamA = tot, teamB = ars;
init();
match(wol, nec)
teamA = wol, teamB = nec;
init();


// Matchday 5
match(whm, che);
teamA = whm, teamB = che;
init();
match(ast, wol);
teamA = ast, teamB = wol;
init();
match(ful, nec);
teamA = ful, teamB = nec;
init();
match(lei, eve)
teamA = lei, teamB = eve;
init();
match(liv, bou)
teamA = liv, teamB = bou;
init();
match(sou, ips)
teamA = sou, teamB = ips;
init();
match(tot, bre)
teamA = tot, teamB = bre;
init();
match(cry, mcu)
teamA = cry, teamB = mcu;
init();
match(bri, not)
teamA = bri, teamB = not;
init();
match(mci, ars)
teamA = mci, teamB = ars;
init();

// Matchday 6
match(nec, mci);
teamA = nec, teamB = mci;
init();
match(ars, lei);
teamA = ars, teamB = lei;
init();
match(bre, whm);
teamA = bre, teamB = whm;
init();
match(che, bri)
teamA = che, teamB = bri;
init();
match(eve, cry)
teamA = eve, teamB = cry;
init();
match(not, ful)
teamA = not, teamB = ful;
init();
match(wol, liv)
teamA = wol, teamB = liv;
init();
match(ips, ast)
teamA = ips, teamB = ast;
init();
match(mcu, tot)
teamA = mcu, teamB = tot;
init();
match(bou, sou)
teamA = bou, teamB = sou;
init();

// Matchday 7
match(cry, liv);
teamA = cry, teamB = liv;
init();
match(ars, sou);
teamA = ars, teamB = sou;
init();
match(bre, wol);
teamA = bre, teamB = wol;
init();
match(lei, bou)
teamA = lei, teamB = bou;
init();
match(mci, ful)
teamA = mci, teamB = ful;
init();
match(whm, ips)
teamA = whm, teamB = ips;
init();
match(eve, nec)
teamA = eve, teamB = nec;
init();
match(ast, mcu)
teamA = ast, teamB = mcu;
init();
match(che, not)
teamA = che, teamB = not;
init();
match(bri, tot)
teamA = bri, teamB = tot;
init();

// Matchday 8
match(tot, whm);
teamA = tot, teamB = whm;
init();
match(ful, ast);
teamA = ful, teamB = ast;
init();
match(ips, eve);
teamA = ips, teamB = eve;
init();
match(mcu, bre)
teamA = mcu, teamB = bre;
init();
match(nec, bri)
teamA = nec, teamB = bri;
init();
match(sou, lei)
teamA = sou, teamB = lei;
init();
match(bou, ars)
teamA = bou, teamB = ars;
init();
match(wol, mci)
teamA = wol, teamB = mci;
init();
match(liv, che)
teamA = liv, teamB = che;
init();
match(not, cry)
teamA = not, teamB = cry;
init();

// Matchday 9
match(lei, not);
teamA = lei, teamB = not;
init();
match(ast, bou);
teamA = ast, teamB = bou;
init();
match(bre, ips);
teamA = bre, teamB = ips;
init();
match(bri, wol)
teamA = bri, teamB = wol;
init();
match(mci, sou)
teamA = mci, teamB = sou;
init();
match(eve, ful)
teamA = eve, teamB = ful;
init();
match(che, nec)
teamA = che, teamB = nec;
init();
match(cry, tot)
teamA = cry, teamB = tot;
init();
match(whm, mcu)
teamA = whm, teamB = mcu;
init();
match(ars, liv)
teamA = ars, teamB = liv;
init();

// Matchday 10
match(nec, ars);
teamA = nec, teamB = ars;
init();
match(bou, mci);
teamA = bou, teamB = mci;
init();
match(ips, lei);
teamA = ips, teamB = lei;
init();
match(liv, bri)
teamA = liv, teamB = bri;
init();
match(not, whm)
teamA = not, teamB = whm;
init();
match(sou, eve)
teamA = sou, teamB = eve;
init();
match(wol, cry)
teamA = wol, teamB = cry;
init();
match(tot, ast)
teamA = tot, teamB = ast;
init();
match(mcu, che)
teamA = mcu, teamB = che;
init();
match(ful, bre)
teamA = ful, teamB = bre;
init();

// Matchday 11
match(bre, bou);
teamA = bre, teamB = bou;
init();
match(cry, ful);
teamA = cry, teamB = ful;
init();
match(whm, eve);
teamA = whm, teamB = eve;
init();
match(wol, sou)
teamA = wol, teamB = sou;
init();
match(bri, mci)
teamA = bri, teamB = mci;
init();
match(liv, ast)
teamA = liv, teamB = ast;
init();
match(mcu, lei)
teamA = mcu, teamB = lei;
init();
match(tot, ips)
teamA = tot, teamB = ips;
init();
match(not, nec)
teamA = not, teamB = nec;
init();
match(che, ars)
teamA = che, teamB = ars;
init();

// Matchday 12
match(lei, che);
teamA = lei, teamB = che;
init();
match(bou, bri);
teamA = bou, teamB = bri;
init();
match(ars, not);
teamA = ars, teamB = not;
init();
match(ast, cry)
teamA = ast, teamB = cry;
init();
match(eve, bre)
teamA = eve, teamB = bre;
init();
match(ful, wol)
teamA = ful, teamB = wol;
init();
match(mci, tot)
teamA = mci, teamB = tot;
init();
match(sou, liv)
teamA = sou, teamB = liv;
init();
match(ips, mcu)
teamA = ips, teamB = mcu;
init();
match(nec, whm)
teamA = nec, teamB = whm;
init();

// Matchday 13
match(bri, sou);
teamA = bri, teamB = sou;
init();
match(bre, lei);
teamA = bre, teamB = lei;
init();
match(cry, nec);
teamA = cry, teamB = nec;
init();
match(not, ips)
teamA = not, teamB = ips;
init();
match(wol, bou)
teamA = wol, teamB = bou;
init();
match(whm, ars)
teamA = whm, teamB = ars;
init();
match(che, ast)
teamA = che, teamB = ast;
init();
match(mcu, eve)
teamA = mcu, teamB = eve;
init();
match(tot, ful)
teamA = tot, teamB = ful;
init();
match(liv, mci)
teamA = liv, teamB = mci;
init();

// Matchday 14
match(bou, tot);
teamA = bou, teamB = tot;
init();
match(ars, mcu);
teamA = ars, teamB = mcu;
init();
match(ast, bre);
teamA = ast, teamB = bre;
init();
match(eve, wol)
teamA = eve, teamB = wol;
init();
match(ful, bri)
teamA = ful, teamB = bri;
init();
match(ips, cry)
teamA = ips, teamB = cry;
init();
match(lei, whm)
teamA = lei, teamB = whm;
init();
match(mci, not)
teamA = mci, teamB = not;
init();
match(nec, liv)
teamA = nec, teamB = liv;
init();
match(sou, che)
teamA = sou, teamB = che;
init();

// Matchday 15
match(ast, sou);
teamA = ast, teamB = sou;
init();
match(bre, nec);
teamA = bre, teamB = nec;
init();
match(cry, mci);
teamA = cry, teamB = mci;
init();
match(eve, liv)
teamA = eve, teamB = liv;
init();
match(ful, ars)
teamA = ful, teamB = ars;
init();
match(ips, bou)
teamA = ips, teamB = bou;
init();
match(lei, bri)
teamA = lei, teamB = bri;
init();
match(mcu, not)
teamA = mcu, teamB = not;
init();
match(tot, che)
teamA = tot, teamB = che;
init();
match(whm, wol)
teamA = whm, teamB = wol;
init();

// Matchday 16
match(bou, whm);
teamA = bou, teamB = whm;
init();
match(ars, eve);
teamA = ars, teamB = eve;
init();
match(bri, cry);
teamA = bri, teamB = cry;
init();
match(che, bre)
teamA = che, teamB = bre;
init();
match(liv, ful)
teamA = liv, teamB = ful;
init();
match(mci, mcu)
teamA = mci, teamB = mcu;
init();
match(nec, lei)
teamA = nec, teamB = lei;
init();
match(not, ast)
teamA = not, teamB = ast;
init();
match(sou, tot)
teamA = sou, teamB = tot;
init();
match(wol, ips)
teamA = wol, teamB = ips;
init();

// Matchday 17
match(ast, mci);
teamA = ast, teamB = mci;
init();
match(bre, not);
teamA = bre, teamB = not;
init();
match(cry, ars);
teamA = cry, teamB = ars;
init();
match(eve, che)
teamA = eve, teamB = che;
init();
match(ful, sou)
teamA = ful, teamB = sou;
init();
match(ips, nec)
teamA = ips, teamB = nec;
init();
match(lei, wol)
teamA = lei, teamB = wol;
init();
match(mcu, bou)
teamA = mcu, teamB = bou;
init();
match(tot, liv)
teamA = tot, teamB = liv;
init();
match(whm, bri)
teamA = whm, teamB = bri;
init();

// Matchday 18
match(bou, cry);
teamA = bou, teamB = cry;
init();
match(ars, ips);
teamA = ars, teamB = ips;
init();
match(bri, bre);
teamA = bri, teamB = bre;
init();
match(che, ful)
teamA = che, teamB = ful;
init();
match(liv, lei)
teamA = liv, teamB = lei;
init();
match(mci, eve)
teamA = mci, teamB = eve;
init();
match(nec, ast)
teamA = nec, teamB = ast;
init();
match(not, tot)
teamA = not, teamB = tot;
init();
match(sou, whm)
teamA = sou, teamB = whm;
init();
match(wol, mcu)
teamA = wol, teamB = mcu;
init();

// Matchday 19
match(ast, bri);
teamA = ast, teamB = bri;
init();
match(bre, ars);
teamA = bre, teamB = ars;
init();
match(cry, sou);
teamA = cry, teamB = sou;
init();
match(eve, not)
teamA = eve, teamB = not;
init();
match(ful, bou)
teamA = ful, teamB = bou;
init();
match(ips, che)
teamA = ips, teamB = che;
init();
match(lei, mci)
teamA = lei, teamB = mci;
init();
match(mcu, nec)
teamA = mcu, teamB = nec;
init();
match(tot, wol)
teamA = tot, teamB = wol;
init();
match(whm, liv)
teamA = whm, teamB = liv;
init();

// Matchday 20
match(bou, eve);
teamA = bou, teamB = eve;
init();
match(ast, lei);
teamA = ast, teamB = lei;
init();
match(bri, ars);
teamA = bri, teamB = ars;
init();
match(cry, che)
teamA = cry, teamB = che;
init();
match(ful, ips)
teamA = ful, teamB = ips;
init();
match(liv, mcu)
teamA = liv, teamB = mcu;
init();
match(mci, whm)
teamA = mci, teamB = whm;
init();
match(sou, bre)
teamA = sou, teamB = bre;
init();
match(tot, nec)
teamA = tot, teamB = nec;
init();
match(wol, not)
teamA = wol, teamB = not;
init();

// Matchday 21
match(ars, tot);
teamA = ars, teamB = tot;
init();
match(bre, mci);
teamA =  bre, teamB = mci;
init();
match(eve, ast);
teamA = eve, teamB = ast;
init();
match(ips, bri)
teamA = ips, teamB = bri;
init();
match(lei, cry)
teamA = lei, teamB = cry;
init();
match(not, liv)
teamA = not, teamB = liv;
init();
match(whm, ful)
teamA = whm, teamB = ful;
init();
match(che, bou)
teamA = che, teamB = bou;
init();
match(nec, wol)
teamA = nec, teamB = wol;
init();
match(mcu, sou)
teamA = mcu, teamB = sou;
init();

// Matchday 22
match(ars, ast)
teamA = ars, teamB = ast;
init();
match(bre, liv);
teamA = bre, teamB = liv;
init();
match(che, wol);
teamA = che, teamB = wol;
init();
match(eve, tot)
teamA = eve, teamB = tot;
init();
match(ips, mci)
teamA = ips, teamB = mci;
init();
match(lei, ful)
teamA = lei, teamB = ful;
init();
match(mcu, bri)
teamA = mcu, teamB = bri;
init();
match(nec, bou)
teamA = nec, teamB = bou;
init();
match(not, sou)
teamA = not, teamB = sou;
init();
match(whm, cry)
teamA = whm, teamB = cry;
init();

// Matchday 23
match(bou, not);
teamA = bou, teamB = not;
init();
match(ast, whm);
teamA = ast, teamB = whm;
init();
match(bri, eve);
teamA = bri, teamB = eve;
init();
match(cry, bre)
teamA = cry, teamB = bre;
init();
match(ful, mcu)
teamA = ful, teamB = mcu;
init();
match(liv, ips)
teamA = liv, teamB = ips;
init();
match(mci, che)
teamA = mci, teamB = che;
init();
match(sou, nec)
teamA = sou, teamB = nec;
init();
match(tot, lei)
teamA = tot, teamB = lei;
init();
match(wol, ars)
teamA = wol, teamB = ars;
init();

// Matchday 24
match(bou, liv);
teamA = bou, teamB = liv;
init();
match(ars, mci);
teamA = ars, teamB = mci;
init();
match(bre, tot);
teamA = bre, teamB = tot;
init();
match(che, whm)
teamA = che, teamB = whm;
init();
match(eve, lei)
teamA = eve, teamB = lei;
init();
match(ips, sou)
teamA = ips, teamB = sou;
init();
match(mcu, cry)
teamA = mcu, teamB = cry;
init();
match(nec, ful)
teamA = nec, teamB = ful;
init();
match(not, bri)
teamA = not, teamB = bri;
init();
match(wol, ast)
teamA = wol, teamB = ast;
init();

// Matchday 25
match(ast, ips);
teamA = ast, teamB = ips;
init();
match(bri, che);
teamA =  bri, teamB = che;
init();
match(cry, eve);
teamA = cry, teamB = eve;
init();
match(ful, not)
teamA = ful, teamB = not;
init();
match(lei, ars)
teamA = lei, teamB = ars;
init();
match(liv, wol)
teamA = liv, teamB = wol;
init();
match(mci, nec)
teamA = mci, teamB = nec;
init();
match(sou, bou)
teamA = sou, teamB = bou;
init();
match(tot, mcu)
teamA = tot, teamB = mcu;
init();
match(whm, bre)
teamA = whm, teamB = bre;
init();

// Matchday 26
match(bou, wol);
teamA = bou, teamB = wol;
init();
match(ars, whm);
teamA = ars, teamB = whm;
init();
match(ast, che);
teamA = ast, teamB = che;
init();
match(eve, mcu)
teamA = eve, teamB = mcu;
init();
match(ful, cry)
teamA = ful, teamB = cry;
init();
match(ips, tot)
teamA = ips, teamB = tot;
init();
match(lei, bre)
teamA = lei, teamB = bre;
init();
match(mci, liv)
teamA = mci, teamB = liv;
init();
match(nec, not)
teamA = nec, teamB = not;
init();
match(sou, bri)
teamA = sou, teamB = bri;
init();

// Matchday 27
match(bre, eve);
teamA = bre, teamB = eve;
init();
match(bri, bou);
teamA = bri, teamB = bou;
init();
match(not, ars);
teamA = not, teamB = ars;
init();
match(tot, mci)
teamA = tot, teamB = mci;
init();
match(whm, lei)
teamA = whm, teamB = lei;
init();
match(wol, ful)
teamA = wol, teamB = ful;
init();
match(cry, ast)
teamA = cry, teamB = ast;
init();
match(che, sou)
teamA = che, teamB = sou;
init();
match(liv, nec)
teamA = liv, teamB =  nec;
init();
match(mcu, ips)
teamA = mcu, teamB = ips;
init();

// Matchday 28
match(bre, ast);
teamA = bre, teamB = ast;
init();
match(bri, ful);
teamA = bri, teamB = ful;
init();
match(che, lei);
teamA = che, teamB = lei;
init();
match(cry, ips)
teamA = cry, teamB = ips;
init();
match(liv, sou)
teamA = liv, teamB = sou;
init();
match(mcu, ars)
teamA = mcu, teamB = ars;
init();
match(not, mci)
teamA = not, teamB = mci;
init();
match(tot, bou)
teamA = tot, teamB = bou;
init();
match(whm, nec)
teamA = whm, teamB = nec;
init();
match(wol, eve)
teamA = wol, teamB = eve;
init();

// Matchday 29
match(bou, bre);
teamA = bou, teamB = bre;
init();
match(ars, che);
teamA = ars, teamB = che;
init();
match(ast, liv);
teamA = ast, teamB = liv;
init();
match(eve, whm)
teamA = eve, teamB = whm;
init();
match(ful, tot)
teamA = ful, teamB = tot;
init();
match(ips, not)
teamA = ips, teamB = not;
init();
match(lei, mcu)
teamA = lei, teamB = mcu;
init();
match(mci, bri)
teamA = mci, teamB = bri;
init();
match(nec, cry)
teamA = nec, teamB = cry;
init();
match(sou, wol)
teamA = sou, teamB = wol;
init();

// Matchday 30
match(bou, ips);
teamA = bou, teamB = ips;
init();
match(ars, ful);
teamA = ars, teamB = ful;
init();
match(bri, ast);
teamA = bri, teamB = ast;
init();
match(not, mcu)
teamA = not, teamB = mcu;
init();
match(wol, whm)
teamA = wol, teamB = whm;
init();
match(che, tot)
teamA = che, teamB = tot;
init();
match(mci, lei)
teamA = mci, teamB = lei;
init();
match(nec, bre)
teamA = nec, teamB = bre;
init();
match(sou, cry)
teamA = sou, teamB = cry;
init();
match(liv, eve)
teamA = liv, teamB = eve;
init();

// Matchday 31
match(ast, not);
teamA = ast, teamB = not;
init();
match(bre, che);
teamA = bre, teamB = che;
init();
match(cry, bri);
teamA = cry, teamB = bri;
init();
match(eve, ars)
teamA = eve, teamB = ars;
init();
match(ful, liv)
teamA = ful, teamB = liv;
init();
match(ips, wol)
teamA = ips, teamB = wol;
init();
match(lei, nec)
teamA = lei, teamB = nec;
init();
match(mcu, mci)
teamA = mcu, teamB = mci;
init();
match(tot, sou)
teamA = tot, teamB = sou;
init();
match(whm, bou)
teamA = whm, teamB = bou;
init();

// Matchday 32
match(bou, ful);
teamA = bou, teamB = ful;
init();
match(ars, bre);
teamA = ars, teamB = bre;
init();
match(bri, lei);
teamA = bri, teamB = lei;
init();
match(che, ips)
teamA = che, teamB = ips;
init();
match(liv, whm)
teamA = liv, teamB = whm;
init();
match(mci, cry)
teamA = mci, teamB = cry;
init();
match(nec, mcu)
teamA = nec, teamB = mcu;
init();
match(not, eve)
teamA = not, teamB = eve;
init();
match(sou, ast)
teamA = sou, teamB = ast;
init();
match(wol, tot)
teamA = wol, teamB = tot;
init();

// Matchday 33
match(ast, nec);
teamA = ast, teamB = nec;
init();
match(bre, bri);
teamA = bre, teamB = bri;
init();
match(cry, bou);
teamA = cry, teamB = bou;
init();
match(eve, mci)
teamA = eve, teamB = mci;
init();
match(ful, che)
teamA = ful, teamB = che;
init();
match(ips, ars)
teamA = ips, teamB = ars;
init();
match(lei, liv)
teamA = lei, teamB = liv;
init();
match(mcu, wol)
teamA = mcu, teamB = wol;
init();
match(tot, not)
teamA = tot, teamB = not;
init();
match(whm, sou)
teamA = whm, teamB = sou;
init();

// Matchday 34
match(bou, mcu);
teamA = bou, teamB = mcu;
init();
match(ars, cry);
teamA = ars, teamB = cry;
init();
match(bri, whm);
teamA = bri, teamB = whm;
init();
match(che, eve)
teamA = che, teamB = eve;
init();
match(liv, tot)
teamA = liv, teamB = tot;
init();
match(mci, ast)
teamA = mci, teamB = ast;
init();
match(nec, ips)
teamA = nec, teamB = ips;
init();
match(not, bre)
teamA = not, teamB = bre;
init();
match(sou, ful)
teamA = sou, teamB = ful;
init();
match(wol, lei)
teamA = wol, teamB = lei;
init();

// Matchday 35
matchday = 35;
match(ars, bou);
teamA = ars, teamB = bou;
init();
match(ast, ful);
teamA = ast, teamB = ful;
init();
match(bre, mcu);
teamA = bre, teamB = mcu;
init();
match(bri, nec)
teamA = bri, teamB = nec;
init();
match(che, liv)
teamA = che, teamB = liv;
init();
match(cry, not)
teamA = cry, teamB = not;
init();
match(eve, ips)
teamA = eve, teamB = ips;
init();
match(lei, sou)
teamA = lei, teamB = sou;
init();
match(mci, wol)
teamA = mci, teamB = wol;
init();
match(whm, tot)
teamA = whm, teamB = tot;
init();

// Matchday 36
match(bou, ast);
teamA = bou, teamB = ast;
init();
match(ful, eve);
teamA = ful, teamB = eve;
init();
match(ips, bre);
teamA = ips, teamB = bre;
init();
match(liv, ars)
teamA = liv, teamB = ars;
init();
match(mcu, whm)
teamA = mcu, teamB = whm;
init();
match(nec, che)
teamA = nec, teamB = che;
init();
match(not, lei)
teamA = not, teamB = lei;
init();
match(sou, mci)
teamA = sou, teamB = mci;
init();
match(tot, cry)
teamA = tot, teamB = cry;
init();
match(wol, bri)
teamA = wol, teamB = bri;
init();

// Matchday 37
match(ars, nec);
teamA = ars, teamB = nec;
init();
match(ast, tot);
teamA = ast, teamB = tot;
init();
match(bre, ful);
teamA = bre, teamB = ful;
init();
match(bri, liv)
teamA = bri, teamB = liv;
init();
match(che, mcu)
teamA = che, teamB = mcu;
init();
match(cry, wol)
teamA = cry, teamB = wol;
init();
match(eve, sou)
teamA = eve, teamB = sou;
init();
match(lei, ips)
teamA = lei, teamB = ips;
init();
match(mci, bou)
teamA = mci, teamB = bou;
init();
match(whm, not)
teamA = whm, teamB = not;
init();

// Matchday 38
match(bou, lei);
teamA = bou, teamB = lei;
init();
match(ful, mci);
teamA = ful, teamB = mci;
init();
match(ips, whm);
teamA = ips, teamB = whm;
init();
match(liv, cry)
teamA = liv, teamB = cry;
init();
match(mcu, ast)
teamA = mcu, teamB = ast;
init();
match(nec, eve)
teamA = nec, teamB = eve;
init();
match(not, che)
teamA = not, teamB = che;
init();
match(sou, ars)
teamA = sou, teamB = ars;
init();
match(tot, bri)
teamA = tot, teamB = bri;
init();
match(wol, bre)
teamA = wol, teamB = bre;
init();

// Call this function to display the table
table(engteams);
