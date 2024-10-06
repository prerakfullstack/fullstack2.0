let dataURL = "https://jsonplaceholder.typicode.com/users";
let userName = document.querySelector(".table-data.name");
let email = document.querySelector(".table-data.email");
let contact = document.querySelector(".table-data.contact");
let company = document.querySelector(".table-data.company");


//using async await
const populateUserData = async () => {
    try {
        let response = await fetch(dataURL);
        let userData = await response.json();
        console.log(userData);
        userName.innerHTML = userData[0].name;
        email.innerHTML = userData[0].email;
        contact.innerHTML = userData[0].phone;
        company.innerHTML = userData[0].company.name;
    }
    catch (error) {
        console.error(`Error fetching the data ${error}`);
    }
}

//using promises
// const populateUserData = () => {
//     fetch(dataURL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((userData) => {
//             console.log(userData);
//             userName.innerHTML = userData[0].name;
//             email.innerHTML = userData[0].email;
//             contact.innerHTML = userData[0].phone;
//             company.innerHTML = userData[0].company.name;
//         })
//         .catch((error) => {
//             console.error(`Error fetching the data ${error}`);
//         });
// }

populateUserData();



