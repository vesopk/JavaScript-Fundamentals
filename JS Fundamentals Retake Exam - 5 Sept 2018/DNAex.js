function DNAex(input){
    let genomes = {};

    let nameRegex = /(.+)=/;
    let lengthOfNameRegex = /=(\d+)/;
    let countOfGenes = /--(\d+)/;
    let organismName = /<<([a-zA-Z]+)/;

    for (let line of input) {

        if(line === "Stop!"){
            break;
        }

        let name = organismName.exec(line);
        let genes = countOfGenes.exec(line);
        let nameLength = lengthOfNameRegex.exec(line);
        let geneName = nameRegex.exec(line);

        if(name !== null && genes !== null && nameLength !== null && geneName !== null){
            name = name[1];
            genes = genes[1];
            nameLength = nameLength[1];
            geneName = geneName[1];

            if(/^([a-z!@#$?]+)$/.exec(geneName) !== null){

            let processedGeneNameLength = Array.from(geneName).filter(l => !["!","@","#","$","?"].includes(l)).length;

            if(processedGeneNameLength === Number(nameLength)){
                if(!genomes.hasOwnProperty(name)){
                    genomes[name] = 0;
                }
                genomes[name] += Number(genes);
            }
        }
        }
    }
    let sortedGenomes = Object.keys(genomes).sort((a,b) => genomes[b] - genomes[a]);

    for (let g of sortedGenomes) {
        console.log(`${g} has genome size of ${genomes[g]}`);
    }
}

DNAex(["!@ру?би#=4--57<<polecat",
    "?do?@#ri#=4--89<<polecat",
    "=12<<cat",
    "!vi@rus?=2--142",
    "@pa!rcu>ba@cteria$=13--234<<mouse",
    "?!cur##viba@cter!!=11--680<<cat",
    "Stop!"
    ]);