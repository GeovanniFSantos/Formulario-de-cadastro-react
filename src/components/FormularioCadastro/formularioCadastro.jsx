import react from "react";
import Button from "@mui/material/Button"

function FormularioCadastro(){
        return(
            <form>
                <label>Nome</label>
                <input type="text" />

                <label>Sobrenome</label>
                <input type="text" />

                <label>CPF</label>
                <input type="text" />

                <label>Promoçôes</label>
                <input type="checkbox" />

                <label>Novidades</label>
                <input type="checkbox" />

                <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
            </form>
        )
}


export default FormularioCadastro