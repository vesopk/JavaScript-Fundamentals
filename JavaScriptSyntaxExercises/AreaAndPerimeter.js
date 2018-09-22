function Solve(a, b)
{
    let firstNumber = +a;
    let secondNumber = +b;

    let area = firstNumber * secondNumber;
    let perimeter = 2*(firstNumber) + 2*(secondNumber);

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
