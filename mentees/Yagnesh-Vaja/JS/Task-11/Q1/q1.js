localStorage.setItem('userName', 'Yagnesh Vaja');


const storedName = localStorage.getItem('userName');
document.getElementById('displayName').textContent = `Welcome, ${storedName}!`;