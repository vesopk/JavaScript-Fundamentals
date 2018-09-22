function Distance(arr)
{
    let firstSpeed = +arr[0] * 1000;
    let secondSpeed = +arr[1] * 1000;
    let period = +arr[2] / 3600;

    let firstDistance = firstSpeed * period;
    let secondDistance = secondSpeed * period;

    var distance = Math.abs(firstDistance - secondDistance);

    console.log(distance);
}

Distance([11,10,120]);