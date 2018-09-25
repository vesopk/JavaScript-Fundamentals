function Cook(arr){
    let num = +arr[0];
    for (let i = 1; i < arr.length; i++) {
        num = ChangeNum(num,arr[i]);
        console.log(+num.toFixed(1));
    }
    function ChangeNum(num,type){
        switch(type){
            case "chop": num /= 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num += 1; break;
            case "bake": num *= 3; break;
            case "fillet": num *= 0.8; break;
        }
        return num;
    }
}

Cook([9, "dice", "spice", "chop", "bake", "fillet"]);