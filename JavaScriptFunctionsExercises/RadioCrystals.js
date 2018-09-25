function radioCrystal(input) {
    let cut = {cut: (x) => x / 4, counter: 0, name: 'Cut'}
    let lap = {lap: (x) => x * 0.8, counter: 0, name: 'Lap'}
    let grind = {grind: (x) => x - 20, counter: 0, name: 'Grind'}
    let etch = {etch: (x) => x - 2, counter: 0, name: 'Etch'}
    let xRay = {xRay: (x) => x + 1, counter: 0, name: 'X-ray'}

    for (let i = 1; i < input.length; i++) {
        let currentThickness = input[i];
        let targetThickness = input[0];
        console.log(`Processing chunk ${currentThickness} microns`);
        while(currentThickness / 4 >= targetThickness - 1){
            currentThickness = Math.floor(cut.cut(currentThickness));
            cut.counter++;
        }
        print(cut);
        while(currentThickness * 0.8 >= targetThickness - 1){
            currentThickness = Math.floor(lap.lap(currentThickness));
            lap.counter++;
        }
        print(lap);
        while(currentThickness - 20 >= targetThickness - 1){
            currentThickness = grind.grind(currentThickness);
            grind.counter++;
        }
        print(grind);
        while(currentThickness - 2 >= targetThickness - 1){
            currentThickness = etch.etch(currentThickness);
            etch.counter++;
        }
        print(etch);
        if(currentThickness == targetThickness - 1){
            currentThickness = xRay.xRay(currentThickness);
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${currentThickness} microns`);
        }
        else{
            console.log(`Finished crystal ${currentThickness} microns`);
        }
    }
    
    function print(operation){
        if(operation.counter > 0){
            console.log(`${operation.name} x${operation.counter}`);
            console.log('Transporting and washing');
        }
    }
}