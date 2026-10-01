import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';


function FormularioRegistro({ onAgregar }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [error, setError] = useState('');

  const limpiarFormulario = () => {
    setNombre('');
    setEmail('');
    setEdad('');
  };

  const validarCampos = () => {

    const campos = [
      { valor: nombre, etiqueta: 'Nombre' },
      { valor: email, etiqueta: 'Email' },
      { valor: edad, etiqueta: 'Edad' },
    ];

    let mensaje = '';
    campos.forEach((campo) => {
      if (!campo.valor.trim()) {
        mensaje = `El campo "${campo.etiqueta}" es obligatorio`;
      }
    });

    return mensaje;
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const mensajeError = validarCampos();
    if (mensajeError) {
      setError(mensajeError);
      return;
    }

    const nuevoRegistro = {
      id: `reg-${Date.now()}`,
      nombre,
      email,
      edad,
    };

    onAgregar(nuevoRegistro);
    setError('');
    limpiarFormulario();
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Nuevo Invalido
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={manejarEnvio}
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}
      >
        <TextField
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          size="small"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
        />
        <TextField
          label="Edad"
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          size="small"
          sx={{ width: 100 }}
        />
        <Button type="submit" variant="contained">
          Agregar
        </Button>
      </Box>
    </Paper>
  );
}

export default FormularioRegistro;
