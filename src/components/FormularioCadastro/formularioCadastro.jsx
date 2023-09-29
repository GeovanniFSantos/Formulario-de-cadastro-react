import React, { useState } from "react";
import DadosPessoais from "../DadosPessoais/DadosPessoais";
import DadosUsuario from "../DadosUsuario/DadosUsuario";
import DadosEntrega from "../DadosDeEntregas/DadosEntrega";
import { Typography } from "@mui/material";

function FormularioCadastro({aoEnviar, validarCPF}){
    const [etapaAtual, setEtapaAtual] = useState(1); 

    function proximo(){
        setEtapaAtual(etapaAtual+1)
    }

    function formularioAtual(etapa){
        switch(etapa){
            case 1:
                return <DadosUsuario aoEnviar={proximo}/>;
            case 2:
                return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>;
            case 3:
                return <DadosEntrega aoEnviar={aoEnviar}/>;
        default:
            return <Typography>Erro ao selecionar formulário</Typography>
        }
    }
        return( <> { formularioAtual(etapaAtual) }</>)
}


export default FormularioCadastro