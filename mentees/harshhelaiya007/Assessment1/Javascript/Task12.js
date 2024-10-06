const apiCallPromise = (url) => {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(xhttp.responseText);
                } else {
                    reject(new Error(`Error: ${this.status}`));
                }
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    });
};

async function main() {
    try {
        const response = await apiCallPromise("https://jsonplaceholder.typicode.com/users");
        const jsonData = JSON.parse(response);
        console.log(jsonData);
        const userData = jsonData.map(user => ({
            Name: user.name,
            Email: user.email,
            Phone: user.phone,
            Company: user.company.name
        }));

        console.table(userData);
    } catch (error) {
        console.error('Failed:', error);
    }
}
main()
