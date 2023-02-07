import React, { Fragment } from 'react';

import { useForm } from "react-hook-form";



const FormHook = () => {



    const {register, handleSubmit, formState:{errors}} = useForm(); //cambio errors



    const onSubmit=(data, e) =>{

        console.log(data)

         // limpiar campos

        e.target.reset();

        }



    return (

            <Fragment>

                <h2>Mi Primer Hook Form </h2>

                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <input 

                            {...register

                                ('titulo', {required: true})

                            }

                            placeholder="Ingrese nombre de titulo" className="form-control my-2"

                         />

                         {errors.titulo && <span className="text-danger text-small d-block mb-2">Campo Requerido</span>} 

                         <button type="submit" className="btn btn-primary">

                            Enviar

                        </button>

                        

                    </form>



            </Fragment>

           );

}

 

export default FormHook;