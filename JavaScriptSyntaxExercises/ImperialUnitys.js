function Change(inches)
{
    let intInches = Number.parseInt(inches);
    let feet = Math.floor(intInches / 12);
    let inc = intInches % 12;

    console.log(`${feet}'-${inc}"`);
}

Change(11);