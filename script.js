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

const persona1 = new Persona({
    id: 1,
    firstname: "Eloy",
    lastname: "Leon",
});

console.log(persona1);

const usuario1 = new Usuario({    
    id: persona1.id,
    firstname: persona1.firstname,
    lastname: persona1.lastname
    });


    
console.log(usuario1);