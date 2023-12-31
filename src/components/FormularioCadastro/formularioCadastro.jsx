import React, { useEffect, useState } from "react";
import DadosPessoais from "../DadosPessoais/DadosPessoais";
import DadosUsuario from "../DadosUsuario/DadosUsuario";
import DadosEntrega from "../DadosDeEntregas/DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

function FormularioCadastro({aoEnviar, validacoes}){
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(()=> {
        if(etapaAtual === formulario.length-1){
          aoEnviar(dadosColetados)
        }
    })
        

    const formulario = [
     <DadosUsuario aoEnviar={coletarDados}  validacoes={validacoes}/>,
     <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes}/>,
     <DadosEntrega aoEnviar={coletarDados}  validacoes={validacoes}/>,
     <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ];

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados})
        proximo();
    };

    function proximo(){
        setEtapaAtual(etapaAtual+1)
    };

        return( <> 
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        { formulario[etapaAtual] }
        </>)
}


export default FormularioCadastro