'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';

interface ContactFormProps {
  initialType?: string;
  onSubmitSuccess?: () => void;
}

export default function ContactForm({ initialType = 'Propietario', onSubmitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    numero: '',
    type: initialType,
    captcha: '',
    id: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'default-key';
      const response = await fetch('https://app.polizaderentas.com/api/offices/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/json'
        },
        body: new URLSearchParams(formData as any).toString()
      });

      const data = await response.json();

      if (data.status === 'success') {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: data.message,
          confirmButtonText: 'OK',
        });
        
        // Reset form
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          numero: '',
          type: initialType,
          captcha: '',
          id: ''
        });

        // Callback opcional
        if (onSubmitSuccess) onSubmitSuccess();
      } else {
        throw new Error(data.message || 'Error en el envío');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema con el envío. Por favor, intenta nuevamente.',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <form className="formulario-informes" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input 
          type="text" 
          name="nombre" 
          className="form-control" 
          id="nombre" 
          value={formData.nombre}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Primer Apellido</label>
        <input 
          type="text" 
          name="apellido" 
          className="form-control" 
          id="apellido" 
          value={formData.apellido}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo electrónico</label>
        <input 
          type="email" 
          name="email" 
          className="form-control" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="numero" className="form-label">WhatsApp</label>
        <input 
          type="number" 
          name="numero" 
          className="form-control" 
          id="numero" 
          value={formData.numero}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">Soy un</label>
        <select 
          name="type" 
          className="form-control" 
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="Propietario">Propietario</option>
          <option value="Inquilino">Inquilino</option>
          <option value="Asesor Inmobiliario">Asesor Inmobiliario</option>
          <option value="Director Inmobiliario">Director Inmobiliario</option>
        </select>
      </div>

      <input type="hidden" name="captcha" value={formData.captcha} />
      <input type="hidden" name="id" value={formData.id} />

      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}