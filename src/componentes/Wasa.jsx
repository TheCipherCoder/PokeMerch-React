import React, { useState } from 'react';
import '../estilos/wasa.css';
import { useThemeContext } from '../context/ThemeContext';

const Wasa = ({ phoneNumber, defaultMessage = "" }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [message, setMessage] = useState(defaultMessage);

    const handleIconClick = () => {
        setIsPopupVisible(true);
    };

    const handleSendClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        setIsPopupVisible(false);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };
    const {contextTheme} = useThemeContext()
    return (
        <>
            <div className="whatsapp-float" onClick={handleIconClick} id={contextTheme}>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
                    alt="WhatsApp" 
                    className="whatsapp-icon"
                />
            </div>

            <div className={`whatsapp-popup ${isPopupVisible ? 'show' : ''}`} id={contextTheme}>
                <button className="close-popup" onClick={handleClosePopup}></button>
                <div className="whatsapp-popup-content">
                    <div className="popup-title">Chatea con PokeMerch</div>
                    <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escribe tu mensaje aquí"
                    />
                    <button onClick={handleSendClick}>Enviar a WhatsApp</button>
                </div>
            </div>
        </>
    );
};

export default Wasa;
