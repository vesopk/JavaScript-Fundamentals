function PrintLocations(arr){
    for(let i = 0; i < arr.length; i+=2){
        let x = arr[i];
        let y = arr[i+1];

        let isInTuvalu = IsInTuvalu(x,y);
        if(isInTuvalu){
            console.log("Tuvalu");
        }
        else{
            let isInTonga = IsInTonga(x,y);
            if(isInTonga){
                console.log("Tonga");
            }
            else{
                let isInCook = IsInCook(x,y);
                if(isInCook){
                    console.log("Cook");
                }
                else{
                    let isInSamoa = IsInSamoa(x,y);
                    if(isInSamoa){
                        console.log("Samoa");
                    }
                    else{
                        let isInTokelau = IsInTokelau(x,y);
                        if(isInTokelau){
                            console.log("Tokelau");
                        }
                        else{
                            console.log("On the bottom of the ocean");
                        }
                    }
                }
            }
        }
    }

    function IsInTuvalu(x,y){
        if(x >= 1 && x <= 3){
            if(y >= 1 && y<= 3){
                return true;
            }
        }
        return false;
    }
    function IsInTonga(x,y){
        if(x >= 0 && x <= 2){
            if(y >= 6 && y<= 8){
                return true;
            }
        }
        return false;
    }
    function IsInCook(x,y){
        if(x >= 4 && x <= 9){
            if(y >= 7 && y<= 8){
                return true;
            }
        }
        return false;
    }
    function IsInSamoa(x,y){
        if(x >= 5 && x <= 7){
            if(y >= 3 && y<= 6){
                return true;
            }
        }
        return false;
    }
    function IsInTokelau(x,y){
        if(x >= 8 && x <= 9){
            if(y >= 0 && y<= 1){
                return true;
            }
        }
        return false;
    }
}

PrintLocations([6, 4]);