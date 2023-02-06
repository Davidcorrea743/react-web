import React, {useState} from 'react';


const Contador = () => {
    

    const [numero, setNumero] = useState(0);

    const aumentar = () =>{
        setNumero(numero+1)
    }


    return(
        <div>
            <h3>Componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>


        </div>

    );

}

export default Contador;