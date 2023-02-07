import React, {useState, Fragment} from 'react'

const Formulario = () => {

    // Acá se utiliza el hook useState para relacionar los datos de los input
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
    });

    // Con esta función indicamos que el input estará escuchando los eventos o cambios que se generen por el usuario, con ... lo que hacemos en concatenar los datos que venian anteriormente de datos
    const handleInputChange= (event) =>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

    }
     // Con esta función evitamos que al darle clic al botón de enviar se recargue la pagina y se eliminen los datos y se envian los datos concatenados a la consola.
    const enviarDatos = (event) =>{
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)

    }


  return (
    <Fragment>
        <h1>Formulario</h1>
        <form className='row'onSubmit={enviarDatos}>
            <div className='col-md-3'>
                <input type= 'text'
                placeholder='Ingrese Nombre'
                className='form-control'
                name='nombre'
                onChange={handleInputChange}
                />
            </div>
            <div className='col-md-3'>
                <input type='text'
                placeholder='Ingrese Apellido'
                className='form-control'
                name='apellido'
                onChange={handleInputChange}
                />
            </div>
            <div className='col-md-3'>
                <button className='btn btn-primary' type='submit'>Enviar</button>
            </div>
             
        </form>
    </Fragment>

  )
}

export default Formulario
