function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(document).ready(() => {
    const api_url = "http://localhost:8000/api/v1/product/";

    $('#send_btn').click(() => {
        const csrftoken = getCookie("csrftoken");
        
        /* Get the data from the form and list items on a dictionary */

        // Jquery manner
        let prodDict = {}
        const formData = $('#form').serializeArray()
        for (const inp of formData) {
            prodDict[inp.name] = inp.value;
        }
        console.log(prodDict);

        fetch(api_url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken, },
            body: JSON.stringify(prodDict) // body data type must match "Content-Type" header
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
            });
        window.history.back();
    })
})