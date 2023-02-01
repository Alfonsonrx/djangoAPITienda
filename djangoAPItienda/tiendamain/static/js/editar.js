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
    const producto = JSON.parse($('#hello-data').text());
    const api_url = "http://localhost:8000/api/v1/product/"+producto.id+"/";

    $('#send_btn').click(() => {
        let csrftoken = getCookie("csrftoken");
        
        /* Get the data from the form and list items on a dictionary */

        // Original manner
        // let prodArr = []
        // const formData = new FormData(document.getElementById('form'));
        // for (const [key, val] of formData) {
        //     prodArr[key] = val;
        // }
        // console.log(prodArr);

        // Jquery manner
        let prodDict = {}
        const formData = $('#form').serializeArray()
        for (const inp of formData) {
            prodDict[inp.name] = inp.value;
        }

        fetch(api_url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken, },
            body: JSON.stringify(prodDict) // body data type must match "Content-Type" header
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
            });
        // document.location.href="/";
        window.history.back();
    })
})