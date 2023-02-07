import React, {Fragment, useState} from 'react'

import {useForm} from 'react-hook-form'

const EjemploUno = () => {


  const {register, handleSubmit, formState:{errors}} = useForm(); //cambio errors


    const [Entradas, setEntradas] = useState([])
    const onSubmit=(data, e) =>{
      console.log(data);
       // limpiar campos
      setEntradas([
        ...Entradas,
        data
      ])

      e.target.reset();


    }


  return (
    <Fragment>
        <h1> Ejemplo #1</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        placeholder='Título' className='form-control my-2'
        {...register("titulo", 
        { required: true })} 
        aria-invalid={errors.titulo ? "true" : "false"} 
      />
      {errors.titulo?.type === 'required' && <p role="alert" className="text-danger text-small d-block mb-2">Campo Requerido</p>} 

      <input
      placeholder='Descripción' className='form-control my-2'
        {...register("descripcion", 
        { required: true })} 
        aria-invalid={errors.descripcion ? "true" : "false"} 
      />
      {errors.descripcion?.type === 'required' && <p role="alert" className="text-danger text-small d-block mb-2">Campo Requerido</p>} 
          <button className='btn btn-primary'> Agregar </button>
        </form>

        <ul>
          {
            Entradas.map(item =>
              <li>{item.titulo} - {item.descripcion}</li>
            )
          }
        </ul>



    </Fragment>
    
  )
}

export default EjemploUno
