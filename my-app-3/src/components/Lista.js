import React, {useState} from "react";

const Lista = () =>{

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5,6,7])

    const agregarElemento = () =>{
        setArrayNumero([
            ...arrayNumero,
            6
        ])

    }

    return(
        <div>
             <h2>Lista</h2>
             <button onClick={agregarElemento}>Agregar</button>
                {
                    arrayNumero.map((item, index) => 
                        <p key={index}>{item} - {index} </p>
                    )

                }

        </div>
  
    )
}

export default Lista;