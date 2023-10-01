function validarCPF(cpf) {
    if (cpf.length !== 12) {
        return { valido: false, texto: "CPF deve ter 11 dígito." }
    } else {
        return { valido: true, texto: " " }
    }
}

function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 30) {
        return { valido: false, texto: "Senha deve ter 5 dígitos." }
    } else {
        return { valido: true, texto: " " }
    }
}

export { validarCPF, validarSenha }