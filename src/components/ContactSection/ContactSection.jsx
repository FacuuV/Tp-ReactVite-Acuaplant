import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
	// 1. Usamos un solo estado para manejar todos los datos del formulario.
	const [formData, setFormData] = useState({
		nombre: '',
		email: '',
		telefono: '',
		genero: '',
		comentario: '',
		archivo: null,
	});

	// 2. Una función genérica para manejar los cambios en los inputs de texto, email, etc.
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	// 3. Una función específica para el input de tipo "file".
	const handleFileChange = e => {
		setFormData(prevState => ({
			...prevState,
			archivo: e.target.files[0], // Guardamos el objeto del archivo
		}));
	};

	// 4. La función que se ejecuta al enviar el formulario.
	const handleSubmit = e => {
		e.preventDefault(); // Prevenimos que la página se recargue

		// Mostramos los datos en la consola para verificar
		console.log('--- Datos del Formulario Recibidos ---');
		console.log('Nombre y Apellido:', formData.nombre);
		console.log('Email:', formData.email);
		console.log('Teléfono:', formData.telefono);
		console.log('Género:', formData.genero);
		console.log('Comentario:', formData.comentario);
		console.log(
			'Archivo:',
			formData.archivo ? formData.archivo.name : 'No se seleccionó archivo'
		);
		console.log('------------------------------------');

		// Mostramos una alerta de confirmación
		alert(
			`¡Gracias por tu mensaje, ${formData.nombre}! Hemos "recibido" tus datos.`
		);

		// Limpiamos el formulario
		setFormData({
			nombre: '',
			email: '',
			telefono: '',
			genero: '',
			comentario: '',
			archivo: null,
		});
		document.getElementById('contactForm').reset(); // Resetea el input de archivo
	};

	return (
		<section className='contact-container' id='contacto'>
			<h1>Formulario de Contacto</h1>
			<form id='contactForm' onSubmit={handleSubmit}>
				<label htmlFor='nombre'>Nombre y Apellido:</label>
				<input
					type='text'
					id='nombre'
					name='nombre'
					placeholder='Ej: Juan Pérez'
					value={formData.nombre}
					onChange={handleChange}
					required
				/>

				<label htmlFor='email'>Correo Electrónico:</label>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='Ej: juan.perez@correo.com'
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<label htmlFor='telefono'>Número de Teléfono:</label>
				<input
					type='tel'
					id='telefono'
					name='telefono'
					placeholder='Ej: 1122334455'
					value={formData.telefono}
					onChange={handleChange}
				/>

				<label>Género:</label>
				<div className='gender-group'>
					<input type='radio' id='hombre' name='genero' value='hombre' checked={formData.genero === 'hombre'} onChange={handleChange} required />
					<label htmlFor='hombre'>Hombre</label>

					<input type='radio' id='mujer' name='genero' value='mujer' checked={formData.genero === 'mujer'} onChange={handleChange} />
					<label htmlFor='mujer'>Mujer</label>

					<input type='radio' id='otro' name='genero' value='otro' checked={formData.genero === 'otro'} onChange={handleChange} />
					<label htmlFor='otro'>Otro</label>
				</div>

				<label htmlFor='comentario'>Comentario:</label>
				<textarea id='comentario' name='comentario' rows='5' placeholder='Escribe tu mensaje aquí...' value={formData.comentario} onChange={handleChange} required></textarea>

				<label htmlFor='archivo'>Subir Archivo (opcional):</label>
				<input type='file' id='archivo' name='archivo' onChange={handleFileChange} />

				<button type='submit'>Enviar</button>
			</form>
		</section>
	);
};

export default ContactSection;