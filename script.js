
const request = fetch(
    "https://fakerapi.it/api/v1/users?_quantity=20&_gender=male"
)
    .then((response) => {
        if (!response.ok) {
            throw new Error("La solicitud no pudo ser completada");
        }
        console.log("La conexion con la API ha sido exitosa");
        return response.json();
    }).then((array) => {
        const usuarios = array.data.map(user => new Usuario(user));

        console.log("Usuarios Obtenidos:", usuarios)
    }).catch((error) => {
        console.log("Error al obtener usuarios", error)
    });


// Creo la clase persona
class Persona {
    // Creo el constructor en la clase persona para definir sus propiedades
    constructor({ id, firstname, lastname }) {
        // con This.propiedad selecciona la pripiedad dentro del array(API), luego con el = id (valor) la selecciono (enlazo) entro del constructor
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

// Creo la clase Usuario que la extendo de la clase persona, eso significa que tendra los datos de la persona + los datos que tenga como usuario
class Usuario extends Persona {
    // Creo el constructor de usuarios que tendra sus propias propiedades + las propiedades de la clase persona
    constructor({ 
        id,
        firstname,
        lastname,
        username,
        password,
        email,
        website,
        image
    }) {
        // Con super enlazo las propiedades y valores de Persona. Traigo las propiedades de la clase persona a la clase Usuario.
        super({id, firstname, lastname});

        // Agrego las propiedades unicas de Usuario
        this.password = password;
        this.username = username;
        this.email = email;
        this.website = website;
        this.image = image;
    }
}

// Creo la variable persona1 con New Persona para cojer las propiedades de la clase persona y meterles valores
const persona1 = new Persona({
    id: 1,
    firstname: "Eloy",
    lastname: "Leon",
});

console.log(persona1);

// Creo la variable Usuario1 con New Usuario para cojer las propiedades de la clase Usuario y meterles valores.
const usuario1 = new Usuario({   
    
    // person1.id significa que estoy trayendo los valores de la misma propiedad de la variable persona1.
    id: persona1.id,
    firstname: persona1.firstname,
    lastname: persona1.lastname,
    password: 1234,
    username: "Leon11",
    email: "eloyribes11@gmail.com",
    website: "eloyleon.com",
    image: "karaku.png"

    });

console.log(usuario1);