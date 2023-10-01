import './App.css';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro';
import { Container, Typography } from "@mui/material"
import 'fontsource-roboto'
import { validarCPF, validarSenha } from './Models/cadastro';
import ValidacoesCadastro from './Context/validacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article">
        <Typography variant='h2' align='center'>Formulario de cadastro!</Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App;
