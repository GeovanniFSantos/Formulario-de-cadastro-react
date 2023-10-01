import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosEntrega({aoEnviar}){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return (
        <form onSubmit={(e) =>{ 
            e.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade}) 
        }}>
            <TextField
            value={cep}
            onChange={(event) => { setCep(event.target.value)}}
            id="cep" 
            label="CEP" 
            type="number" 
            margin="normal" 
            fullWidth
            />

            <TextField
            value={endereco}
            onChange={(event) => { setEndereco(event.target.value)}}
            id="endereco" 
            label="Endereço" 
            type="text" 
            margin="normal" 
            fullWidth
            />

            <TextField
            value={numero}
            onChange={(event) => { setNumero(event.target.value)}}
            id="numero" 
            label="Numero" 
            type="number" 
            margin="normal" 
            fullWidth
            />

            <TextField
            value={estado}
            onChange={(event) => { setEstado(event.target.value)}}
            id="estado" 
            label="Estado" 
            type="text" 
            margin="normal" 
            />

            <TextField
            value={cidade}
            onChange={(event) => { setCidade(event.target.value)}}
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