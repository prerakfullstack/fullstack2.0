                //arrow function to add numbers
                const add = (a,b) => a+b;
                const sum = add(6,4);
                console.log(`Sum: ${sum}`);
               
                 //JSON 
                const user = '{ "employee" : [' +
                '{ "Name":"Palak" , Age:19,"Interest":"Music" } ]}';

                const userProf = JSON.parse(user);
                console.log('Namw:${userProf.name}');
           