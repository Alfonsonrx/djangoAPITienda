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

$(document).ready(function() {
    const api_url = "http://localhost:8000/api/v1/product/";
    var divproductos = $('#tabla-productos');
    
    $('#call-product').click(() => {
        fetch(api_url)
            .then(response => response.json())
            .then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        let element = data[i];
                        var nuevo_prod = '<tr class="producto">' 
                        + '<td>' + element.id + '</td>'
                        + '<td>' + element.name + '</td>'
                        + '<td>' + element.description + '</td>'
                        + '<td>' + element.serial_num + '</td>'
                        + '<td>' + element.price + '</td>'
                        + '<td> <input type="button" class="borrar" value="Borrar" id='+element["id"]+' > </td>'
                        + '<td> <input type="button" class="borrar" value="Borrar" id='+element["id"]+' > </td>'
                        + '</tr>';
                        divproductos.append(nuevo_prod);
                    }
                });
        });
    
    $('body').on('click', '.borrar', function() {
        let id_eliminar = $(this).attr('id');
        let csrftoken = getCookie("csrftoken")
        fetch(api_url+id_eliminar+"/", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken},
            })
            .then(response => response.json)
            .then((data) => {
                console.log(data);
            })
    })
});
