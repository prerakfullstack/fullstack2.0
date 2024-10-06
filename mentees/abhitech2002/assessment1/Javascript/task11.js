// Local Storage 
function storeUserName(name) {
    localStorage.setItem('userName', name);
}


function displayUserName() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('greeting').textContent = `Hello, ${userName}!`;
    } else {
        document.getElementById('greeting').textContent = `Hello, Guest!`;
    }
}

storeUserName('Abhishek Ojha');
displayUserName()