// Hacer la solicitud a la API
const request = fetch(
    "https://fakerapi.it/api/v1/users?_quantity=20&_gender=male"
)
    .then((response) => {
        if (!response.ok) {
            throw new Error("La solicitud no pudo ser completada");
        }
        console.log("La conexion con la API ha sido exitosa");
        return response.json();
    })

    // imprimir datos si todo ha ido correcto
    .then((array) => {

        // Crear variable de que parte de html se va a trabajar
        const referenciaID = document.getElementById("results");

        // creo un bucle forEach para recorrer los  valores del array
        array.data.forEach((usuario) => {

            // Creo un DIV dentro del div results para declarar los valores
            const creacionID = document.createElement("div");

            // creo la lista con innerHTML que es para añadir texto, y hago template para añadir los valores del array que yo quiera. Añado la lista dentro del div creado dentro del div results
            creacionID.innerHTML = `
            <p><strong>ID:</strong> ${usuario.id}</p> 
            <p><strong>Nombre:</strong> ${usuario.firstname} ${usuario.lastname}</p> 
            <p><strong>Username:</strong> ${usuario.username}</p> 
            <p><strong>Password:</strong> ${usuario.password}</p> 
            <p><strong>Email:</strong> ${usuario.email}</p> 
            <p><strong>IP:</strong> ${usuario.ip}</p> 
            <p><strong>MacAddress:</strong> ${usuario.macAddress}</p> 
            <p><strong>Website:</strong> ${usuario.website}</p> 
            <p><strong>Image:</strong> ${usuario.image}</p> 
            <hr>
            `;

            // pongo que en la referencia en la que estamos ( EL ID PADRE ) añadimos el ID que acabamos de crear ( EL ID HIJO)
            referenciaID.appendChild(creacionID);
        });
    })

    //  Si hay algun error al recorrer los datos, lo imprimo por consola
    .catch((error) => {
        console.log("Error al obtener los datos:", error);
    });
