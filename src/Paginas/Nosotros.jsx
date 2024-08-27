import React from 'react';
import '../estilos/nosotros.css'
import img1 from '../assets/nosotros/julio.jpg'
import img2 from '../assets/nosotros/Gian.png'
import img3 from '../assets/nosotros/goku.jpg'
import img4 from '../assets/nosotros/grace.png'
import img5 from '../assets/nosotros/nicole.png'
import img6 from '../assets/nosotros/ash.jpg'
import { useThemeContext } from '../context/ThemeContext';

const Nosotros = () => {
    const {contextTheme} = useThemeContext()
    return (
        <div className="personas-container__background-triangle" id={contextTheme}>
            <div className="fondo-todo" id={contextTheme}></div>
            <div className="personas-triangle personas-triangle1"></div>
            <div className="personas-triangle personas-triangle2"></div>
            <div className="personas-triangle personas-triangle3"></div>
            <div className="personas-triangle personas-triangle4"></div>
            
            <div className="personas-container__cards">
                <div className="personas-card">
                    <div className="personas-cover__card">
                        <img src={img1} alt="" />
                    </div>
                    <h2> - Team Papos - </h2>
                    <p className='texto-nosotros'>Como dijo alguien algun dia: "Si lo puedes imaginar , lo puedes programar, esta pagina fue un reto para mi y aprendi mucho."</p>
                    <hr />
                    <div className="personas-footer__card">
                        <h3 className="personas-user__name">Hector Julio</h3>
                        <i> 27 de Agosto</i>
                    </div>
                </div>
                <div className="personas-card">
                    <div className="personas-cover__card">
                        <img src={img2} alt="" />
                    </div>
                    <h2> - Team Papos - </h2>
                    <p className='texto-nosotros'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt eius dolore pariatur. Error, provident et similique sunt voluptate odit eos facere expedita, culpa at officia magnam quia vel eius!</p>
                    <hr />
                    <div className="personas-footer__card">
                        <h3 className="personas-user__name">Giancarlos</h3>
                        <i> 27 de Agosto</i>
                    </div>
                </div>
                <div className="personas-card">
                    <div className="personas-cover__card">
                        <img src={img3} alt="" />
                    </div>
                    <h2> - Team Papos - </h2>
                    <p className='texto-nosotros'>Con la ayuda el kaioken logramos acabar este proyecto que la verdad nos causo muchos dolores de cabeza, algunos se rindieron ,pero solo los mas Papos quedaron en pie.</p>
                    <hr />
                    <div className="personas-footer__card">
                        <h3 className="personas-user__name">Goku</h3>
                        <i> 27 de Agosto</i>
                    </div>
                </div>

                <div className="personas-card">
                    <div className="personas-cover__card">
                        <img src={img4} alt="" />
                    </div>
                    <h2> - Team Papos - </h2>
                    <p className='texto-nosotros'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt eius dolore pariatur. Error, provident et similique sunt voluptate odit eos facere expedita, culpa at officia magnam quia vel eius!</p>
                    <hr />
                    <div className="personas-footer__card">
                        <h3 className="personas-user__name">Grace</h3>
                        <i> 27 de Agosto</i>
                    </div>
                </div>

                <div className="personas-card">
                    <div className="personas-cover__card">
                        <img src={img5} alt="" />
                    </div>
                    <h2> - Team Papos - </h2>
                    <p className='texto-nosotros'>En un mundo donde los monitos monine y los Pokémon se encuentran, ¡las risas son tan poderosas como un ataque Trueno de Pikachu y las aventuras tan emocionantes como un viaje por Kanto!</p>
                    <hr />
                    <div className="personas-footer__card">
                        <h3 className="personas-user__name">Nicole</h3>
                        <i> 27 de Agosto</i>
                    </div>
                </div>

                <div className="personas-card">
                    <div className="personas-cover__card">
                        <img src={img6} alt="" />
                    </div>
                    <h2> - Team Papos - </h2>
                    <p className='texto-nosotros'>Le agradezco a Julio el papo mas papo por haber hecho con su equipo esta pagina tan buenarda, la vd que le compre una ropita ami pikachu ,que esperan , compren¡</p>
                    <hr />
                    <div className="personas-footer__card">
                        <h3 className="personas-user__name">Ash</h3>
                        <i> 27 de Agosto</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
