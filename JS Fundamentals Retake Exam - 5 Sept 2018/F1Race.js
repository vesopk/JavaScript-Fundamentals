function Race(input){
    let racers = [];
    let actions = {
        Join: function(racer){
            if(!racers.includes(racer)){
                racers.push(racer);
            }
        },
        Crash: function(racer){
            if(racers.includes(racer)){
                racers.splice(racers.indexOf(racer),1);
            }
        },
        Pit: function(racer){
            if(racers.includes(racer)){
                let racerIndex = racers.indexOf(racer);
                let lastRacerIndex = racerIndex + 1;
                let lastRacerName = racers[lastRacerIndex];
                racers.splice(racerIndex,1,lastRacerName);
                racers.splice(lastRacerIndex,1,racer);
            }
        },
        Overtake: function(racer){
            if(racers.includes(racer)){
                let racerIndex = racers.indexOf(racer);
                if(racerIndex > 0){
                    
                let lastRacerIndex = racerIndex - 1;
                let lastRacerName = racers[lastRacerIndex];
                racers.splice(lastRacerIndex,1,racer);
                racers.splice(racerIndex,1,lastRacerName);
                }
            }
        }
    };

    for (let i = 0;i < input.length; i++) {
        let lineTokens = input[i].split(" ");
        if(i === 0){
            for (const racer of lineTokens) {
                if(!racers.includes(racer)){
                    racers.push(racer);
                }
            }
        }
        else{
            let action = lineTokens[0];
            let racer = lineTokens[1];

            if(actions[action]){
                actions[action](racer);
            }
        }

    }

    console.log(racers.join(" ~ "));
}

let input1 = ["Vetel Hamilton Slavi",
"Pit Hamilton",
"Overtake Vetel",
"Crash Slavi"];

let input2 = ["Vetel Hamilton Raikonnen Botas Slavi",
"Pit Hamilton",
"Overtake LeClerc",
"Join Ricardo",
"Crash Botas",
"Overtake Ricardo",
"Overtake Ricardo",
"Overtake Ricardo",
"Crash Slavi"];

let input3 = ["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"];

Race(input3);