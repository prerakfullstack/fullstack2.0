async function getData() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users');
        let response = await data.json();
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

const populateData = async () => {
    let userData = document.getElementById("userData");
    let userDetails = await getData();
    var myHtml = '';
    userDetails?.map(function (ele) {
        myHtml += '<tr>' +
            '                <td>' + ele?.name + '</td>' +
            '                <td>' + ele?.email + '</td>' +
            '                <td>' + ele?.phone + '</td>' +
            '                <td>' + ele?.company?.name + '</td>' +
            '            </tr>';
        userData.innerHTML = myHtml;
    });
}

populateData();