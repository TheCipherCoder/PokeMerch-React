import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './estilos/resetear.css';
/* Componentes */
import Header from './componentes/Header';
import Footer from './componentes/Footer';  // Importa el componente Footer
import PokeAccesorios from './Paginas/PokeAccesorios';
import PokeJuegos from './Paginas/PokeJuegos';
import PokeRopa from './Paginas/PokeRopa';
import Inicio from './Paginas/Inicio';
import Nosotros from './Paginas/Nosotros';
import AcercaDeNosotros from './Paginas/AcercaDeNosotros';
import MisCompras from './Paginas/MisCompras';
import Formulario from './Paginas/Formulario';
import Wasa from './componentes/Wasa';

function App() {
  return (
    <>
    <CartProvider>
      <Header />
      <Wasa phoneNumber={984570329} defaultMessage="Hola!, busco asesoramiento"/>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='juegos' element={<PokeJuegos />} />
          <Route path='ropa' element={<PokeRopa />} />
          <Route path='accesorios' element={<PokeAccesorios />} />
          <Route path='autores' element={<Nosotros />} />
          <Route path='acerca' element={<AcercaDeNosotros />} />
          <Route path='miscompras' element={<MisCompras />} />
        </Routes>
        <Routes>
          <Route path='formulario' element={<Formulario/>}></Route> 
        </Routes> <br />
        <Footer />
    </CartProvider>
    </>
  );
}

export default App;
