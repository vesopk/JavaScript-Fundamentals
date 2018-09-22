function Max(arr)
{
    function BiggerOfTwo(num1,num2)
    {
        if(num1 > num2){
            return num1;
        }
        else{
            return num2;
        }
    }

    let firstBiggestNum = BiggerOfTwo(arr[0],arr[1]);
    let biggestNumber = BiggerOfTwo(firstBiggestNum,arr[2]);

    console.log(biggestNumber);
}

Max([130,5,99]);