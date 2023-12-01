import React, { useState } from 'react';
import Input from '../Input/Input';
import './Formulario.css'

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmarPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <Input
        label="Apellido"
        type="text"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Telefono"
        type="number"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Input
        label="Confirmar Password"
        type="pasword"
        name="confirmarPassword"
        value={formData.confirmarPassword}
        onChange={handleChange}
      />
      <div className='botones'>
        <button type="submit" className='submit'>Registrarme</button>

        <button className='inicio'>Ya tengo cuenta</button>
      </div>
    </form>
  );
}

export default Formulario;
