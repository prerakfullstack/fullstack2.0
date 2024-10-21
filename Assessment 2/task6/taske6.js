                // spread operator to merge both arrays into a new array.

                const arr1=[1,2,3,4,5,];
                const arr2=[1,7,9,4,10,46,23,8,];
                const mergedArray = [arr1,arr2];
                //spread operator to copy this object and modify the `age`

                const stu = {
                    name:'Palak',
                    age:19 ,
                    tech:["Python","HTML","C++"],
                };

                const student = {
                    stu,
                   age:21 ,
                };
                console.log("Student",stu);
                console.log("NewStudent",student);


