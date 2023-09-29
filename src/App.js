import './App.css';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro';
import { Container, Typography } from "@mui/material"
import 'fontsource-roboto'

class App extends Component {
  render() {
    return (
      <Container>
        <Typography variant='h2' align='center'>Formulario de cadastro!</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}


function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digito." }
  } else {
    return { valido: true, texto: " " }
  }
}
export default App;
