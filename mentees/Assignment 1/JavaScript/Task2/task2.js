
function arithmaticOperations(num1, num2) {
    if (num1> num2) {
        console.log('First Number Should be Greater then Second Number');
        return;
    }

    if (num1 & num2 < 0) {
        console.log('Numbers are less then \'0\'\n');
    }else{
        console.log('Both Numbers are greater then Zero');
    }

    num1 == num2 ? console.log('Both Numbers are Equal') : console.log('Second Number is Greater then First Number');

    console.log('Addition of Number is: ' + (num1+num2) );
    console.log('Subtraction of Number is: ' + (num2-num1) );
    console.log('Multiplication of Number is: ' + (num2*num1) );
    console.log('Division of Number is: ' + (num2/num1) );
    
}


arithmaticOperations(31,39);
