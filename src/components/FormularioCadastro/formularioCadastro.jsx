import React, {useState} from "react";
import {TextField , Button, Switch, FormControlLabel } from '@mui/material';

function FormularioCadastro(){

    const [nome, setNome] = useState(" ");
    const [sobrenome, setSobrenome] = useState(" ");
    const [cpf, setCpf] = useState(" ");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

        return(
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log({nome, sobrenome, cpf, promocoes, novidades})
             }}>

                <TextField 
                value={nome}
                onChange={(event) => {setNome(event.target.value);}}
                id="nome" 
                label="Nome" 
                margin="normal" 
                fullWidth/>

                <TextField 
                value={sobrenome}
                onChange={(event) => {setSobrenome(event.target.value); }}
                id="sobrenome" 
                label="Sobre Nome" 
                margin="normal" 
                fullWidth/>

                <TextField 
                value={cpf}
                onChange={(event) => {
                setCpf(event.target.value); 
                   }}
                id="cpf" 
                label="Cpf" 
                margin="normal" 
                fullWidth/>

                <FormControlLabel 
                label="Promoções" 
                control={<Switch checked={promocoes} onChange={(event) => {setPromocoes(event.target.checked)}} 
                nome="promocoes" 
                color="primary"/>}/>

                <FormControlLabel 
                label="Novidades" 
                control={<Switch checked={novidades} onChange={(event) => {setNovidades(event.target.checked)}}
                nome="novidades" 
                color="primary"/>}/>

                <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
            </form>
        )
}


export default FormularioCadastro