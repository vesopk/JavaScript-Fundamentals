function Day(arr)
{
    let date = new Date(arr[2], arr[1]-1 ,0).getDate();
    console.log(date);
}

Day([17, 3, 2002]);