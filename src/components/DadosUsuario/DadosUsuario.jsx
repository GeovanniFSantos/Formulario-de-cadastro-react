import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../Context/validacoesCadastro";
import useErros from "../../Hooks/useErros";


function DadosUsuario({aoEnviar}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField 
            value={email}
            onChange={(event) => { setEmail(event.target.value)}}
            id="email" 
            label="email" 
            type="email"
            required
            margin="normal"
            fullWidth 
            />

            <TextField 
            value={senha}
            onChange={(event) => { setSenha(event.target.value)}}
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id="senha" 
            label="senha"
            name="senha"
            type="password"
            required
            margin="normal"
            fullWidth
            />

            <Button variant="contained" color="primary" type="submit">Próximo</Button>
        </form>
    )
}



export default DadosUsuario