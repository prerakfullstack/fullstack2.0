                 //function that takes an object and Deconstruct
                 const details = ({ firstName, lastName, age }) => {
                    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
                };
                
                // Example usage of logPersonDetails
                const person = {
                    firstName: 'Palak',
                    lastName: 'Santoki',
                    age: 19
                };
                details(person)

                
                //sum of array
                const num = [2,4,5];
                const sum = ([num1,num2,num3]) =>
                {
                   return num1 + num2+ num3; 
                };
                const S= sum(num);
                console.log('sum of array is:',S);
                
               