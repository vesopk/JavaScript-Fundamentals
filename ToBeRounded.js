function Round(arr)
{
    let number = +arr[0];
    let precision = +arr[1];
    let startPrecision = number.toString().split(".");

    if(precision > 15)
    {
        precision = 15;
    }

    if(startPrecision[1].length < precision)
    {
        precision = startPrecision[1].length;
    }

    let result = number.toFixed(precision);

    console.log(result);
}

Round([3.1415926535897932384626433832795,2]);