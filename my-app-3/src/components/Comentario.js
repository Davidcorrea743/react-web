import React, {Fragment} from 'react'
import Avatar from './Avatar'

const Comentario = ({sujeto}) => {
  return (
    <Fragment>
        <h1> Comentario</h1>
        <br />
        <div class="d-flex">
        <div class="flex-shrink-0">
          <Avatar urlImagen={sujeto.urlImagen}/>
        </div>
        <div class="flex-grow-1 ms-3">
        <h5>{sujeto.nombre}</h5>
        {sujeto.texto}
        </div>
    </div>



    </Fragment>
  )
}

export default Comentario
