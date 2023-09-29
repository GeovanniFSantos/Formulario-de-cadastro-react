import { Button, TextField } from "@mui/material";
import React from "react";

function DadosEntrega(){
    return (
        <form>
            <TextField 
            id="cep" 
            label="CEP" 
            type="number" 
            margin="normal" 
            fullWidth
            />

            <TextField 
            id="endereco" 
            label="Endereço" 
            type="text" 
            margin="normal" 
            fullWidth
            />

            <TextField 
            id="numero" 
            label="Numero" 
            type="number" 
            margin="normal" 
            fullWidth
            />

            <TextField 
            id="estado" 
            label="Estado" 
            type="text" 
            margin="normal" 
            />

            <TextField 
            id="cidade" 
            label="Cidade" 
            type="text" 
            margin="normal" 
            />
            <Button variant="contained" color="primary" fullWidth type="submit">Finalizar Cadastro</Button>
        </form>
    )
}


export default DadosEntrega