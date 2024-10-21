                // even odd
                let number= prompt("enter a number:");
                function check()
                {
                    if(number % 2==0)
                {
                    console.log("number is even");
                }
                    else{
                        console.log("number is odd");
                    }
                }
                check();

                //switch case using function
               const Day = (day) => {

                
                switch(day)
                {
                    
                    case 1:
                        console.log("Monday");
                        break;

                        case 2:
                        console.log("Tueday");
                        break;

                        case 3:
                        console.log("Wednesday");
                        break;


                        case 4:
                        console.log("Thursday");
                        break;

                        case 5:
                        console.log("Friday");
                        break;

                        case 6:
                        console.log("Saturday");
                        break;

                        case 7:
                        console.log("Sunday");
                        break;

                        default:
                            console.log("Invalid day");
                   }
            };
            Day(3);
            Day(7);
            Day(9);


                
                
           