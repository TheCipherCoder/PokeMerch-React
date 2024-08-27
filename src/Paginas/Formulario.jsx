import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import '../estilos/formulario.css';
import { useThemeContext } from '../context/ThemeContext';
const Formulario = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const regexTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regexCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regexCelular = /^[0-9]{9}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!firstName) newErrors.firstName = 'El nombre es obligatorio';
        else if (!regexTexto.test(firstName)) newErrors.firstName = 'El nombre solo debe contener letras';

        if (!lastName) newErrors.lastName = 'Los apellidos son obligatorios';
        else if (!regexTexto.test(lastName) || lastName.length < 2) newErrors.lastName = 'Los apellidos solo deben contener letras y tener al menos 2 caracteres';

        if (!email) newErrors.email = 'El correo es obligatorio';
        else if (!regexCorreo.test(email)) newErrors.email = 'Debe ingresar un correo válido';

        if (!phone) newErrors.phone = 'El celular es obligatorio';
        else if (!regexCelular.test(phone)) newErrors.phone = 'El celular debe tener 9 dígitos';

        if (!password) newErrors.password = 'La contraseña es obligatoria';

        if (!confirmPassword) newErrors.confirmPassword = 'Debes confirmar la contraseña';
        else if (password !== confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            alert(`Datos ingresados:\nNombre: ${firstName}\nApellidos: ${lastName}\nCorreo: ${email}\nCelular: ${phone}`);
        }
    };

    const handleFirstNameChange = (e) => {
        const valorNombre = e.target.value;
        if (regexTexto.test(valorNombre)) {
            setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
        }
        setFirstName(valorNombre);
    };

    const handleLastNameChange = (e) => {
        const valorApellido = e.target.value;
        if (valorApellido.length >= 2 && regexTexto.test(valorApellido)) {
            setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
        }
        setLastName(valorApellido);
    };

    const handleEmailChange = (e) => {
        const valorCorreo = e.target.value;
        if (regexCorreo.test(valorCorreo)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
        setEmail(valorCorreo);
    };

    const handlePhoneChange = (e) => {
        const valorCelular = e.target.value;
        if (regexCelular.test(valorCelular)) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
        }
        setPhone(valorCelular);
    };

    const handlePasswordChange = (e) => {
        const valorContraseña = e.target.value;
        if (valorContraseña) {
            setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        }
        setPassword(valorContraseña);
    };

    const handleConfirmPasswordChange = (e) => {
        const valorConfirmarContraseña = e.target.value;
        if (valorConfirmarContraseña === password) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
        }
        setConfirmPassword(valorConfirmarContraseña);
    };
    const {contextTheme} = useThemeContext()
    return (
        <div className="form-container" id={contextTheme}>
        <div className="fondo-todo" id={contextTheme}></div>
            <h2 className="form-title">Regístrate</h2>
            <div className="form-box">
                <h3>Ingrese sus datos</h3>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group">
                        <div>
                            <Form.Label className="form-label">Nombres</Form.Label>
                        </div>
                        <Form.Control
                            className="form-control"
                            type="text"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            placeholder=""
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                        </Form.Control.Feedback>
                        
                        <div>
                            <Form.Label className="form-label">Apellidos</Form.Label>
                        </div>
                        <Form.Control
                            className="form-control"
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                            placeholder=""
                            isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>

                        <div>
                            <Form.Label className="form-label">Correo Electrónico</Form.Label>
                        </div>
                        <Form.Control
                            className="form-control"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder=""
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                        
                        <div>
                            <Form.Label className="form-label">Celular</Form.Label>
                        </div>
                        <Form.Control
                            className="form-control"
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder=""
                            isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone}
                        </Form.Control.Feedback>

                        <div>
                            <Form.Label className="form-label">Contraseña</Form.Label>
                        </div>
                        <Form.Control
                            className="form-control"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder=""
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                            
                        <div>
                            <Form.Label className="form-label">Verificar Contraseña</Form.Label>
                        </div>
                        <Form.Control
                            className="form-control"
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder=""
                            isInvalid={!!errors.confirmPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.confirmPassword}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button className='form-button' type="submit">Enviar</Button>
                </Form>
            </div>
        </div>
    );
};

export default Formulario;
