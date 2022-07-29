class Usuraio { 
    constructor(id, nombre, email, dineroCuenta){
        this.id = id
        this.nombre = nombre
        this.email = email
        this.dineroCuenta = dineroCuenta
    }
}
const user1 = new Usuraio (1, "Maria", "maria@hotmail.com", 5000)
const user2 = new Usuraio (2, "Matías", "matias@gmail.com", 3000)
const user3 = new Usuraio (3, "Juan", "juan@gmail.com", 8000)
const user4 = new Usuraio (4, "Laura", "laura@outlook.com", 10000)
const usuarios = [user1, user2, user3, user4]
const divusuarios = document.getElementById("divusuarios")
usuarios.forEach(usuario => {
    divusuarios.innerHTML += `
    <div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${usuario.nombre}</h5>
    <p class="card-text">Id: ${usuario.id}</p>
    <p class="card-text">Email: ${usuario.email}</p>
    <p class="card-text">Dinero en Cuenta: ${usuario.dineroCuenta}</p>
</div>
</div>
    `
})
