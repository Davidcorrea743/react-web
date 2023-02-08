import './App.css';
import Comentario from './components/Comentario';


function App() {

  const sujeto ={
    nombre: 'Alejandrito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magnam libero reiciendis ratione sint consequuntur eius iusto nemo temporibus maxime nulla non, placeat adipisci eligendi reprehenderit voluptates ad. Quod, consectetur.'
  }
  return (
    <div  className='container mt-5'>
      
      <Comentario sujeto ={sujeto} />


    </div>
  );
}

export default App;
