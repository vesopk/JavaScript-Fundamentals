function Interest(params)
{
    let principalSum = params[0];
    let interestRate = params[1];
    let compoundingPeriodInMonths = params[2];
    let totalTimeSpanInYears = params[3];

    let compoundFrequency = 12 * 1.0 / compoundingPeriodInMonths;

    let result = principalSum * Math.pow(
        1 + ((interestRate / 100) / compoundFrequency),
        compoundFrequency * totalTimeSpanInYears
        );

    console.log(result.toFixed(2));
}

Interest([1500,4.3,3,6]);