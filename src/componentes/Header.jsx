import React, { useState, useEffect } from "react";
import '../estilos/header.css';
import pokebola from '../assets/pokebola.jpg';
import { Outlet, Link } from "react-router-dom";
import ReactSwitch from 'react-switch';
import { useThemeContext } from "../context/ThemeContext";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const { contextTheme, setContextTheme } = useThemeContext();

    const [checked, setChecked] = useState(contextTheme === 'Dark');

    useEffect(() => {
        setChecked(contextTheme === 'Dark');
    }, [contextTheme]);

    const handleSwitch = (nextChecked) => {
        const newTheme = nextChecked ? 'Dark' : 'Light';
        setContextTheme(newTheme);
        setChecked(nextChecked);
    };

    return (
        <>
          <div className="container-padre-nav" id={contextTheme}>
            <nav className="nav-header">
                  <div className="logo">
                        <img src={pokebola} alt="" />
                        <h1 className="Nombre-pagina-general">POKEMERCH</h1>
                  </div>
                  <div className="usuario">
                      <div>
                      <img src='https://img.icons8.com/?size=100&id=23374&format=png&color=000000' className="i-usuario" alt="" />
                      </div>
                      <Link to ='/formulario'>Registrate</Link>             
                  </div>
                  <div className="shop">
                      <img src='https://img.icons8.com/?size=100&id=62090&format=png&color=000000' className="i-bag" alt="" /> 
                      <Link to="/miscompras" className="mis-compras">Mis Compras</Link>          
                  </div> 
                  {/* ReactSwitch para cambiar de tema */}
                  <ReactSwitch
                    checked={checked}
                    onChange={handleSwitch}
                    handleDiameter={28}
                    offColor="#333"
                    onColor="#fff"
                    offHandleColor="#333"
                    onHandleColor="#fff"
                    height={40}
                    width={70}
                    borderRadius={100}
                    activeBoxShadow="0px 0px 1px 2px #fffc35"
                    uncheckedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "white",
                          paddingRight: 2
                        }}
                      >
                        Off
                      </div>
                    }
                    checkedIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "#333",
                          paddingRight: 2
                        }}
                      >
                        On
                      </div>
                    }
                    uncheckedHandleIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 20
                        }}
                      >
                        ☀️
                      </div>
                    }
                    checkedHandleIcon={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          color: "red",
                          fontSize: 18
                        }}
                      >
                        🌙
                      </div>
                    }
                    className="react-switch"
                    id="small-radius-switch"
                  />
                  {/* Menú Hamburguesa */}
                  <button className="hamburger-menu" onClick={toggleMenu}>
                    <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000" alt="Menu" />
                  </button>
            </nav>

            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} id={contextTheme}>
              <div className="nav-links">
                  <div className="nav-item">
                    <div className="nav-img-contenedor">
                      <img src='https://img.icons8.com/?size=100&id=JvzawTJthRcR&format=png&color=000000' alt="" className="nav-bar-img-icon"/> 
                    </div>  
                    <Link to="/" className="nombre-seccion-nav">Inicio</Link>
                  </div>

                  <div className="nav-item">
                    <div className="nav-img-contenedor">
                      <img src='https://img.icons8.com/?size=100&id=N757ereBOFWm&format=png&color=000000'  alt="" className="img-nav"/>  
                    </div>
                    <Link to="/ropa" className="nombre-seccion-nav">PokeRopa</Link>
                  </div>

                  <div className="nav-item">
                    <div className="nav-img-contenedor">
                      <img src='https://img.icons8.com/?size=100&id=cGyNxHk0jrJM&format=png&color=000000' alt="" />
                    </div>
                    <Link to="/juegos" className="nombre-seccion-nav">PokeJuegos</Link>
                  </div>

                  <div className="nav-item">
                    <div className="nav-img-contenedor">
                      <img src='https://img.icons8.com/?size=100&id=tubBPCkOhpsu&format=png&color=000000' alt="" /> 
                    </div>  
                    <Link to="/accesorios" className="nombre-seccion-nav">PokeAccesorios</Link>
                  </div>

                  <div className="nav-item">
                    <div className="nav-img-contenedor">
                      <img src='https://img.icons8.com/?size=100&id=1366&format=png&color=000000' alt="" /> 
                    </div>  
                    <Link to="/autores" className="nombre-seccion-nav" >PokeAutores</Link>
                  </div>

                  <div className="nav-item">
                    <div className="nav-img-contenedor">
                      <img src='https://img.icons8.com/?size=100&id=bar3GHatnNu6&format=png&color=000000'  alt="" />
                    </div>
                    <Link to="/acerca" className="nombre-seccion-nav">Acerca de</Link>
                  </div>    
              </div>
              <Outlet/>
            </nav>
          </div>
        </>
    );
}

export default Header;
