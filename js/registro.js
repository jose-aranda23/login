const singup_form = document.querySelector("#registro")
singup_form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Usuario = JSON.parse(localStorage.getItem('usuario')) || []
    const isUsuarioRegistered = Usuario.find(usuario => usuario.email === email)
    if (isUsuarioRegistered) {
        return alert('El usuario ya esta registrado!!')
    }

    Usuario.push({ name: name, email: email, password: password })
    localStorage.setItem('usuario', JSON.stringify(Usuario))
    alert('Registro exitoso!!')

    // Redireccion a login
    window.location.href = 'index.html'
})