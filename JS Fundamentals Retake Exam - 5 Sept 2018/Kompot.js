function Kompot(input){
    let kompotFruits = {};
    let rakyaFruits = {};
    const fruits = ["cherry","peach","plum",];

    for (let line of input) {
        let lineTokens = line.split(/\s* | ,/);
        let fruit = lineTokens[0].toLowerCase();
        let amount = Number(lineTokens[1]);

        if(fruits.includes(fruit)){
            if(!kompotFruits.hasOwnProperty(fruit)){
                kompotFruits[fruit] = 0;
            }
            kompotFruits[fruit] += amount;
        }
        else{
            if(!rakyaFruits.hasOwnProperty(fruit)){
                rakyaFruits[fruit] = 0;
            }
            rakyaFruits[fruit] += amount;
        }

    }
    let rakyaFruitsKilos = 0;

    for (const fruit of Object.keys(rakyaFruits)) {
        rakyaFruitsKilos += rakyaFruits[fruit];
    }
    rakyaFruitsKilos *= 0.2;

    let kompotFruitsInCount = {};

    for (const fruit of Object.keys(kompotFruits)) {
        let currentFruitCount = kompotFruits[fruit];

        switch(fruit){
            case fruits[0]: currentFruitCount /= 0.009;break;
            case fruits[1]: currentFruitCount /= 0.14;break;
            case fruits[2]: currentFruitCount /= 0.02;break;
        }

        if(!kompotFruitsInCount.hasOwnProperty(fruit)){
            kompotFruitsInCount[fruit] = 0;
        }
        kompotFruitsInCount[fruit] += currentFruitCount;
    }

    let cherryKompots = Math.floor(kompotFruitsInCount[fruits[0]] / 25);
    let peachKompots = Math.floor(kompotFruitsInCount[fruits[1]] / 2.5);
    let plumKompots = Math.floor(kompotFruitsInCount[fruits[2]] / 10);

    if(isNaN(cherryKompots)){
        cherryKompots = 0;
    }

    if(isNaN(peachKompots)){
        peachKompots = 0;
    }

    if(isNaN(plumKompots)){
        plumKompots = 0;
    }


    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumKompots}`);
    console.log(`Rakiya liters: ${rakyaFruitsKilos.toFixed(2)}`);
}

let input1 = [ 'cherry 1.2',
'peach 2.2', 
'plum 5.2',
'peach 0.1', 
'cherry 0.2', 
'cherry 5.0', 
'plum 10',
'cherry 20.0' ,
'papaya 20'];

let input2 = [ 'apple 6',
'peach 25.158',
'strawberry 0.200',
'peach 0.1',
'banana 1.55',
'cherry 20.5',
'banana 16.8',
'grapes 205.65',
'watermelon 20.54'];

Kompot(input2);