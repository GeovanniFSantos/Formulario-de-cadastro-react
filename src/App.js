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
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
