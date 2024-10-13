const userName = "Neel Rathod";
localStorage.setItem('userName', userName);

const storedName = localStorage.getItem('userName');
if (storedName) {
    console.log(`Hello, ${storedName}!`);
} else {
    console.log("No name found in LocalStorage.");
}