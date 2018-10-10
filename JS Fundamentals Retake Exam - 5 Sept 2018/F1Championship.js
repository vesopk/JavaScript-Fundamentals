function F1(input){
    let teams = {};
    for (const line of input) {
        let lineTokens = line.split(" -> ");

        let team = lineTokens[0];
        let pilot = lineTokens[1];
        let points = Number(lineTokens[2]);

        if(!teams.hasOwnProperty(team)){
            teams[team] = {};
        }
        if(!teams[team].hasOwnProperty(pilot)){
            teams[team][pilot] = 0;
        }
        teams[team][pilot] += points;
    }
    let sortedTeams = Object.keys(teams).sort((a,b) => sortTeamsByTotalPoints(a,b));

    for (let i = 0; i < 3; i++) {

        let pilots = Object.keys(teams[sortedTeams[i]]).sort((a,b) => sortPilotsByPoints(a,b));

        let sortedTeamPoints = 0;
        for (const pilot of pilots) {
            sortedTeamPoints += teams[sortedTeams[i]][pilot];
        }

        console.log(`${sortedTeams[i]}: ${sortedTeamPoints}`);

        for (const pilot of pilots) {
            console.log(`-- ${pilot} -> ${teams[sortedTeams[i]][pilot]}`);
        }
        
        function sortPilotsByPoints(a,b){
            let firstPilotPoints = teams[sortedTeams[i]][a];
            let secondPilotPoints = teams[sortedTeams[i]][b];

            return secondPilotPoints - firstPilotPoints;
        }
    }


    function sortTeamsByTotalPoints(a,b){
        let firstTeamPilots = Object.keys(teams[a]);
        let firstTeamPoints = 0;

        for (const pilot of firstTeamPilots) {
            firstTeamPoints += teams[a][pilot];
        }

        let secondTeamPilots = Object.keys(teams[b]);
        let secondTeamPoints = 0;

        for (const pilot of secondTeamPilots) {
            secondTeamPoints += teams[b][pilot];
        }

        return secondTeamPoints - firstTeamPoints;
    }
}

let input1 = ["Ferrari -> Kimi Raikonnen -> 25",
"Ferrari -> Sebastian Vettel -> 18",
"Mercedes -> Lewis Hamilton -> 10",
"Mercedes -> Valteri Bottas -> 8",
"Red Bull -> Max Verstapen -> 6",
"Red Bull -> Daniel Ricciardo -> 4"];

let input2 = ["Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4",
    "Mercedes -> Lewis Hamilton -> 25",
    "Mercedes -> Valteri Bottas -> 18",
    "Haas -> Romain Grosjean -> 25",
    "Haas -> Kevin Magnussen -> 25"];

F1(input2);