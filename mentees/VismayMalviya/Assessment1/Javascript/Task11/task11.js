function saveName(name) {
    localStorage.setItem('userName', name);
  }
  
function displayUsersName() {
    const storedName = localStorage.getItem('userName');
    
    if (storedName) {
      document.getElementById('greeting').textContent = `Hello, ${storedName}!`;
    }
  }


// localStorage.setItem('username', 'Vismay'); //not defined

// const username = localStorage.getItem('username');
// console.log(`Welcome, ${username}!`);

// const cat = localStorage.getItem("myCat"); //not defined

// localStorage.removeItem("myCat"); 

// if (typeof window !== 'undefined' && window.localStorage) {

//     const username = localStorage.getItem('username');
//     console.log(username);
// }
