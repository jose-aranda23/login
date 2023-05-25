const inicio = document.querySelector('#inicio')

inicio.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Usuario = JSON.parse(localStorage.getItem('usuario')) || []
    const validUsuario = Usuario.find(usuario => usuario.email === email && usuario.password === password)
    if (!validUsuario) {
        return alert('Usuario y/o Contraseña Incorrectos!!')
    }
    alert(`Bienvenido ${validUsuario.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUsuario))
    window.location.href = 'inicio.html'
})